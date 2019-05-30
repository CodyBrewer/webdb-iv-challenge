exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: "Meat Lovers's Pizza", dish_id: 1 },
        { name: 'Shredded Chicken Tacos', dish_id: 2 },
        { name: 'Bacon Double Cheese Burger', dish_id: 3 }
      ]);
    });
};
