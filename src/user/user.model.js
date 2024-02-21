const knex = require("../../db/knex");

const USER_TABLE = "user_table";

module.exports = {
  USER_TABLE,

  getAllUsers() {
    return knex(USER_TABLE).select("*");
  },

  getSingleUser(id) {
    return knex(USER_TABLE).where("id", "=", id).select("*");
  },

  addNewUser(req) {
    return knex(USER_TABLE)
      .insert({
        first_name: req.first_name,
        last_name: req.last_name,
        email: req.email,
        password: req.password,
      })
      .returning("*");
  },

  deleteUser(id) {
    return knex(USER_TABLE).where("id", "=", id).del();
  },

  updateUser(id, updateInfo) {
    return knex(USER_TABLE).where("id", "=", id).update(updateInfo);
  },
};
