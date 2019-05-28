const db = require('./data/dbConfig');

//return list of all dishes
const getDishes = () => {
  return db('dishes');
};

//add the dish to database and return id of the new dish
const addDish = dish => {
  return db('dishes').insert(dish);
};

//return the dish with provided id and includ a list of the related recipes
const getDish = id => {};
//return list of all recipes in the database
const getRecipes = () => {};

//add a reciped to the database
const addRecipe = recipe => {};

module.export = { getDishes, addDish };
