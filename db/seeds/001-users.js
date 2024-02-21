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
    {
      first_name: "Anna",
      last_name: "Smith",
      email: "Anna@example.com",
      password: "password789",
    },
    {
      first_name: "Lucy",
      last_name: "Jones",
      email: "Lucy@example.com",
      password: "password101112",
    },
    {
      first_name: "Ethan",
      last_name: "Brown",
      email: "Ethan@example.com",
      password: "password131415",
    },
    {
      first_name: "Sophia",
      last_name: "Wilson",
      email: "Sophia@example.com",
      password: "password161718",
    },
    {
      first_name: "Liam",
      last_name: "Taylor",
      email: "Liam@example.com",
      password: "password192021",
    },
  ]);
};
