db = require('../../data/dbConfig');
const knex = require('knex');
//- `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
const getRecipes = () => {
  return db('recipes')
    .join('dishes', 'recipes.dish_id', 'dishes.id')
    .select(
      'recipes.id',
      'recipes.name as Recipe_name',
      'dishes.name as Dish_Name'
    );
};

// - `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**.
const addRecipe = recipe => {
  return db('recipes').insert(recipe);
};
// - add a method called `getRecipe(id)` to your data access library that should return the recipe with the provided `id`. The recipe should include:
//   - name of the dish.
//   - name of the recipe.
//   - the list of ingredients with the quantity.
// SELECT d.name as 'Dish', r.name  as 'Recipe' , GROUP_CONCAT(i.quantity || ' ' || i.unit || ' '|| i.'name') as 'Ingredients'
// FROM recipes as r
// JOIN dishes as d ON r.dish_id = d.id
// JOIN ingredients as i ON i.recipe_id = r.id
// WHERE r.id = 1
const getRecipe = id => {
  console.log('hello from getRecipe Method');
  return db('recipes')
    .join('dishes', 'recipes.dish_id', 'dishes.id')
    .join('ingredients', 'ingredients.recipe_id', 'recipes.id')
    .where('recipes.id', id)
    .select('dishes.name as Dish', 'recipes.name as Recipe')
    .columns(
      knex.raw(
        "quantity || ' ' || unit || ' ' || ingredients.name as Ingredients"
      )
    );
};
module.exports = { getRecipes, addRecipe, getRecipe };
