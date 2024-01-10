const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/user-model");

passport.serializeUser((user, done) => {
  console.log("serialize user");
  console.log(user);
  done(null, user._id); //mongodb的id存在session內部，
  //並且id簽名後 以cookie交給user
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
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
