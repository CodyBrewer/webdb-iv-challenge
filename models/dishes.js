const db = require('../data/dbConfig');

//return list of all dishes
const getDishes = () => {
  return db('dishes');
};

//add the dish to database and return id of the new dish
const addDish = dish => {
  return db('dishes').insert(dish);
};
//return the dish with provided id and includ a list of the related recipes
const getDish = id => {
  return db('dishes')
    .join('recipes', 'dishes.id', 'recipes.dish_id')
    .where('dishes.id', id)
    .select(
      'dishes.id',
      'dishes.name as Dish Name',
      'recipes.name as Recipe Name'
    );
};

const deleteDish = id => {
  return db('dishes')
    .where({ id })
    .delete();
};

const updateDish = (id, changes) => {
  return db('dishes')
    .where({ id })
    .update(changes);
};

module.exports = { getDishes, addDish, getDish, deleteDish, updateDish };
