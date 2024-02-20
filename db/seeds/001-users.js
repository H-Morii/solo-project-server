/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_table").del();
  await knex("user_table").insert([
    {
      first_name: "Don",
      last_name: "Doe",
      email: "Don@example.com",
      password: "password123",
    },
    {
      first_name: "Mike",
      last_name: "Doe",
      email: "Mike@example.com",
      password: "password456",
    },
  ]);
};
