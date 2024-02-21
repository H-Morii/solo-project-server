const commentModel = require("./comment.model");

module.exports = {
  async getAll(req, res) {
    try {
      const allComments = await commentModel.getAllComments();
      res.status(200).send(allComments);
    } catch (err) {
      console.error(err.message);
    }
  },

  async getSingleComment(req, res) {
    try {
      const id = parseInt(req.params.id);
      const singleComment = await commentModel.getSingleComment(id);
      res.status(200).send(singleComment);
    } catch (err) {
      console.error(err.message);
    }
  },

  async addNewComment(req, res) {
    try {
      const { user_id, details, rate_movie } = req.body;
      const newComment = await commentModel.addNewComment(req.body);
      res.status(200).send(newComment);
    } catch (err) {
      console.error(err.message);
    }
  },

  async deleteComment(req, res) {
    try {
      const id = parseInt(req.body.id);
      const deletedcomment = await commentModel.deleteComment(id);
      res.status(200).send(`comment has been deleted. ${id}`);
    } catch (err) {
      console.error(err.message);
    }
  },

  async updateComment(req, res) {
    try {
      const id = parseInt(req.params.id);
      const updateInfo = req.body;
      const updatedComment = await commentModel.updatedComment(id, updateInfo);
      res.send("comment Updated");
    } catch (err) {
      console.error(err.message);
      res.send(400).send("not working");
    }
  },
};
