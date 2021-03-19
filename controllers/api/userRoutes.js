const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
  res.json("login");
});

module.exports = router;
