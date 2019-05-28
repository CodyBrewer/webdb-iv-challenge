exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
    //primary id key, autoincrements
    tbl.increments();
    tbl
      .varchar('name', 255)
      .notNullable()
      .unique();
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
