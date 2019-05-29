const dishes = require('../api/Models/dishes');
const recipes = require('../api/Models/Ingredients');

const validateDishesId = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const dish = await dishes.getDish(id);
    if (dish) {
      req.dish = dish;
      next();
    } else {
      res.status(404).json({ message: 'dish not found; invalid id' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const validateRecipeId = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(`id`, id);
    const recipe = await recipes.getRecipe(id);
    console.log(`recipe`, recipe);
    if (recipe) {
      req.recipe = recipe;
      next();
    } else {
      res.status(404).json({ message: 'recipe not found; invalid id' });
      console.log(`recipe is `, recipe);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const validateIngredientId = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(`id`, id);
    const ingredient = await recipes.getIngredient(id);
    console.log(`ingredient`, ingredient);
    if (ingredient) {
      req.recipe = ingredient;
      next();
    } else {
      res.status(404).json({ message: 'ingredient not found; invalid id' });
      console.log(`recipe is `, ingredient);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const requiredBody = (req, res, next) => {
  if (req.body && Object.keys(req.body).length) {
    // go on to the next bit of middleware
    next();
  } else {
    // jump to a error handler bit of middleware
    next({ message: 'Please include request body' });
    res.status(400).json({ message: 'Please include request body' });
  }
};

module.exports = {
  validateDishesId,
  validateRecipeId,
  validateIngredientId,
  requiredBody
};
