const express = require("express");
const fs = require("fs");

const router = express.Router();
const filePath = "./data/movies.json";

// GET all movies
router.get("/", (req,res)=>{
  const movies = JSON.parse(fs.readFileSync(filePath));
  res.json(movies);
});

// POST add movie (Admin)
router.post("/add", (req,res)=>{
  const movies = JSON.parse(fs.readFileSync(filePath));

  const newMovie = {
    id: Date.now(),
    ...req.body
  };

  movies.push(newMovie);

  fs.writeFileSync(filePath, JSON.stringify(movies,null,2));

  res.json({ success:true });
});

module.exports = router;