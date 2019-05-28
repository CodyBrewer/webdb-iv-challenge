db = require('../../data/dbConfig');
//- `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
const getRecipes = () => {
  return db('recipes').join('dishes', "recipes.dish_id", 'dishes.id').select('recipes.id', 'recipes.name as Recipe_name', 'dishes.name as Dish_Name');
};


// - `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**.
const addRecipe = (recipe) => {
  return db('recipes').insert(recipe);
}
// - add a method called `getRecipe(id)` to your data access library that should return the recipe with the provided `id`. The recipe should include:
//   - name of the dish.
//   - name of the recipe.
//   - the list of ingredients with the quantity.
const getRecipe = id => {
  return db('recipes').join('dishes', "recipes.dish_id", 'dishes.id').join('ingredients', 'ingredients.recipe_id', 'recipes_id').where('recipes.id'. id).select('dishes.name', 'recipes.name', 'ingredients.*')
}
module.exports = { getRecipes, addRecipe };
