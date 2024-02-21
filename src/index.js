const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const knex = require("../db/knex");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Im here baby");
});

app.listen(process.env.PORT || 8080, () => {
  console.log("server is running :) PORT:8080");
});
