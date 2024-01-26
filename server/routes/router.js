const express = require("express");
const router = express.Router();
const { Users } = require("../models/schemas");

router.post("/users", async (req, res) => {
  const { name, password } = req.body;
  res.send("user sent, thank you");

  const user = { name: name, password: password };
  const newUser = new Users(user);
  const saveUsers = await newUser.save();
  if (saveUsers) {
    res.send("User added, thank you");
  } else {
    res.send("Failed to send message");
  }
  res.end();
});

router.get("/users", async (req, res) => {
  const userData = await Users.find({}).exec();
  if (userData) {
    res.send(JSON.stringify(userData));
  }
});

module.exports = router;
