const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      // idk if this is gonna work ahaha
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render("homepage", { posts, logged_in: req.session.logged_in });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const postData = await Post.findAll({
      // where: {
      //   user_id: req.session.id,
      // },
      // idk if this is gonna work ahaha
    });

    const commentData = await Comment.findAll({
      // where: {
      //   post_id: Post.id
      // },
      // idk if this is gonna work ahaha
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render("dashboard", {
      posts,
      comments,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
