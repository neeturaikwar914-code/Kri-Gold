const express = require("express");
const fs = require("fs");

const router = express.Router();
const filePath = "./data/users.json";

// GET all users
router.get("/", (req,res)=>{
  const users = JSON.parse(fs.readFileSync(filePath));
  res.json(users);
});

// CREATE new profile
router.post("/add", (req,res)=>{
  const users = JSON.parse(fs.readFileSync(filePath));

  const newUser = {
    id: Date.now(),
    name: req.body.name,
    watchlist: [],
    continueWatching: []
  };

  users.push(newUser);

  fs.writeFileSync(filePath, JSON.stringify(users,null,2));

  res.json({ success:true });
});

module.exports = router;