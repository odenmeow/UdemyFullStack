const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/user-model");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
passport.serializeUser((user, done) => {
  console.log("serialize user");
  console.log(user);
  done(null, user._id); //mongodb的id存在session內部，
  //並且id簽名後 以cookie交給user
});

passport.deserializeUser(async (_id, done) => {
  console.log("反序列化使用者(回歸物件)，透過之前序列化的資料，得到_id");
  let foundUser = await User.findOne({ _id });
  done(null, foundUser);
  // paspport 將 req.user的這個屬性設定為 foundUser 方便存取。
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/project7/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log(profile);
      // 第一次登入則幫她註冊
      console.log("進入Google Strategy區域");
      console.log("==================");
      let foundUser = await User.findOne({ googleID: profile.id }).exec();
      if (foundUser) {
        console.log("已經註冊過，無須存入");
        done(null, foundUser);
      } else {
        console.log("偵測到新用戶，需儲存");
        let newUser = new User({
          name: profile.displayName,
          googleID: profile.id,
          thumbnail: profile.photos[0].value,
          email: profile.emails[0].value,
        });
        let savedUser = await newUser.save();
        console.log("成功創建新用戶");
        done(null, savedUser);
      }
    }
  )
);
// 這邊的username , password 是根據post自動從req.body 解構進去的
passport.use(
  new LocalStrategy(async (username, password, done) => {
    let foundUser = await User.findOne({ email: username }).exec();
    if (foundUser) {
      let result = await bcrypt.compare(password, foundUser.password);
      if (result) {
        done(null, foundUser);
      } else {
        done(null, false);
      }
    } else {
      done(null, false);
    }
  })
);
