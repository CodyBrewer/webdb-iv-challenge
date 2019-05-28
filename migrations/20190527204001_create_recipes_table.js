exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    //primary key, auto increments
    tbl.increments();
    //name column
    tbl
      .varchar('name', 255)
      .notNullable()
      .unique();
    //foreign key connecting to dishID
    tbl
      .integer('dish_id')
      .unsigned()
      .references('id') // column
      .inTable('dishes') //table
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    //enable created_at, updated_at timestamps
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
