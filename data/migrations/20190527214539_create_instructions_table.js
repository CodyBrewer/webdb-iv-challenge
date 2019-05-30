exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', tbl => {
    //primary key auto increment
    tbl.increments();
    //instruction step
    tbl.integer('step').notNullable();
    //instruction details
    tbl.varchar('details', 500).notNullable();
    //foreign key to relate to recipe
    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id') // column
      .inTable('recipes') //table
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};
