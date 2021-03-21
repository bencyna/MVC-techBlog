const router = require("express").Router();
const { User, Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/dashboard", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      post: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
