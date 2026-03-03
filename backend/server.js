const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
  res.send("Backend Running 🚀");
});

app.get("/movies",(req,res)=>{
  const data = JSON.parse(fs.readFileSync("./data/movies.json"));
  res.json(data);
});

app.post("/add-movie",(req,res)=>{
  const movies = JSON.parse(fs.readFileSync("./data/movies.json"));
  const newMovie = { id:Date.now(), ...req.body };
  movies.push(newMovie);
  fs.writeFileSync("./data/movies.json", JSON.stringify(movies,null,2));
  res.json({success:true});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log("Server Started"));