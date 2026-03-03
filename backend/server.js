const express = require("express");
const cors = require("cors");

const moviesRoutes = require("./routes/movies");
const usersRoutes = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
  res.send("OTT Backend Running 🚀");
});

app.use("/movies", moviesRoutes);
app.use("/users", usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log("Server running on", PORT);
});