const userModel = require("./user.model");

module.exports = {
  async getAll(req, res) {
    try {
      const allUsers = await userModel.getAllUsers();
      res.status(200).send(allUsers);
    } catch (err) {
      console.error(err.message);
    }
  },

  async getSingleUser(req, res) {
    try {
      const id = parseInt(req.params.id);
      const singleUser = await userModel.getSingleUser(id);
      res.status(200).send(singleUser);
    } catch (err) {
      console.error(err.message);
    }
  },

  async addNewUser(req, res) {
    try {
      const { first_name, last_name, email, password } = req.body;

      const newUser = await userModel.addNewUser(req.body);
      res.status(200).send(newUser);
    } catch (err) {
      console.error(err.message);
    }
  },

  async deleteUser(req, res) {
    try {
      const id = parseInt(req.body.id);
      const deletedUser = await userModel.deleteUser(id);
      res.status(200).send(`user has been deleted ${id}`);
    } catch (err) {
      console.error(err.message);
    }
  },

  async updateUser(req, res) {
    try {
      const { first_name, last_name, email, password } = req.body;
      const id = parseInt(req.params.id);
      const updateInfo = req.body;
      const UpdatedUser = await userModel.updateUser(id, updateInfo);
    } catch (err) {
      console.error(err.message);
    }
  },
};
