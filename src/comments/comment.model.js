const knex = require("../../db/knex");

const COMMENT_TABLE = "comment_table";

module.exports = {
  COMMENT_TABLE,

  getAllComments() {
    return knex(COMMENT_TABLE).select("*");
  },

  getSingleComment(id) {
    return knex(COMMENT_TABLE).where("id", "=", id).select("*");
  },

  addNewComment(req) {
    return knex(COMMENT_TABLE)
      .insert({
        user_id: req.user_id,
        details: req.details,
        rate_movie: req.rate_movie,
      })
      .returning("*");
  },

  deleteComment(id) {
    return knex(COMMENT_TABLE).where("id", "=", id).del();
  },

  updatedComment(id, updateInfo) {
    return knex(COMMENT_TABLE).where("id", "=", id).update(updateInfo);
  },
};
