const { table } = require("../knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("comment_table", (table) => {
    table.dropForeign("user_id");

    table
      .foreign("user_id")
      .references("id")
      .inTable("user_table")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("comment_table", (table) => {
    table.dropForeign("user_id");

    table
      .foreign("user_id")
      .references("id")
      .inTable("user_table")
      .onDelete("NO ACTION");
  });
};
