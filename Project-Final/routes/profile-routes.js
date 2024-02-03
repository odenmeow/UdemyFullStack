const router = require("express").Router();
const Post = require("../models/post-model");
const authCheck = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect("/project7/auth/login");
  }
};
router.get("/", authCheck, async (req, res) => {
  console.log("已進入 >> /profile");
  let postFound = await Post.find({ author: req.user._id }).exec();

  return res.render("project7/profile", { user: req.user, posts: postFound });
  // deSerial那邊有解釋req.user
});
router.get("/post", authCheck, (req, res) => {
  return res.render("project7/post", { user: req.user });
});
router.post("/post", authCheck, async (req, res) => {
  let { title, content } = req.body;
  let newPost = new Post({
    title,
    content,
    author: req.user._id,
  });
  try {
    let savedPost = await newPost.save();
    return res.redirect("/project7/profile");
  } catch (e) {
    req.flash("error_msg", "標題跟內容都要填寫");
    return res.redirect("/project7/profile/post");
  }
});
module.exports = router;
