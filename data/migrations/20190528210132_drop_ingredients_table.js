//has it really come to this? be careful.
exports.up = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
    //primary key, auto increments
    tbl.increments();
    //name of ingredient
    tbl.varchar('name', 255).notNullable();
    //quantity of ingredient
    tbl.float('quantity', 8, 2);
    //unit of measurement for quantity
    tbl.varchar('unit of measurement', 50).notNullable();
    //foreign key relating to recipes id
    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id') // column
      .inTable('recipes') //table
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};
