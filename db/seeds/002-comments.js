/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("comment_table").del();
  await knex("comment_table").insert([
    { user_id: 1, details: "Great movie!", rate_movie: 5 },
    { user_id: 2, details: "Nice plot twist.", rate_movie: 4 },
    { user_id: 1, details: "Could have been better.", rate_movie: 3 },
  ]);
};
