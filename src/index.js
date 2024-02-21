const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const knex = require("../db/knex");
const userController = require("./user/user.controller");
const commentController = require("./comments/comment.controller");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//USERS
app.get("/user_table", userController.getAll);
app.get("/user_table/:id", userController.getSingleUser);
app.post("/user_table", userController.addNewUser);
app.delete("/user_table/", userController.deleteUser);
app.patch("/user_table/:id", userController.updateUser);

//COMMENTS

app.get("/comment_table", commentController.getAll);
app.get("/comment_table/:id", commentController.getSingleComment);
app.post("/comment_table", commentController.addNewComment);
app.delete("/comment_table/", commentController.deleteComment);
app.patch("/comment_table/:id", commentController.updateComment);

app.listen(process.env.PORT || 8080, () => {
  console.log("server is running :) PORT:8080");
});
