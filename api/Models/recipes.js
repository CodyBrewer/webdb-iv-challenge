db = require('../../data/dbConfig');
//- `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
const getRecipes = () => {
  return db('recipes');
};


// - `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**.
const addRecipe = (recipe) => {
  return db('recipes').insert(recipe);
}

module.exports = { getRecipes, addRecipe };
