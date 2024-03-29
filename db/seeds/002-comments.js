/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("comment_table").del();
  await knex("comment_table").insert([
    { user_id: 37, details: "Great movie!", rate_movie: 5 },
    { user_id: 38, details: "Could have been better.", rate_movie: 3 },
    { user_id: 39, details: "Nice plot twist.", rate_movie: 4 },
    { user_id: 40, details: "Absolutely loved it!", rate_movie: 5 },
    {
      user_id: 41,
      details: "Not what I expected, but in a good way.",
      rate_movie: 4,
    },
    {
      user_id: 42,
      details: "Well-crafted narrative and characters.",
      rate_movie: 5,
    },
    {
      user_id: 40,
      details: "A bit slow in the middle but worth it.",
      rate_movie: 4,
    },
    { user_id: 37, details: "Stunning visuals!", rate_movie: 5 },
    { user_id: 38, details: "The soundtrack was amazing.", rate_movie: 5 },
    { user_id: 39, details: "I didn't get the hype.", rate_movie: 2 },
    { user_id: 40, details: "Loved the cinematography!", rate_movie: 5 },
    { user_id: 41, details: "Plot was a bit predictable.", rate_movie: 3 },
    { user_id: 42, details: "Great for a movie night.", rate_movie: 4 },
    {
      user_id: 37,
      details: "Character development was top-notch.",
      rate_movie: 5,
    },
    { user_id: 38, details: "Ending felt rushed.", rate_movie: 3 },
    { user_id: 39, details: "Laughed more than I expected.", rate_movie: 4 },
    {
      user_id: 40,
      details: "A must-watch for fans of the genree.",
      rate_movie: 5,
    },
  ]);
};
