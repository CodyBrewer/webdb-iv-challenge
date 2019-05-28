const dishes = require('../api/Models/dishes');
const recipes = require('../api/Models/recipes');

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
    res.status(500).json({ message: 'Failed to process request' });
  }
};
const validateRecipeId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await recipes.findById(id);
    if (recipe) {
      req.recipe = recipe;
      next();
    } else {
      res.status(404).json({ message: 'recipe not found; invalid id' });
      console.log(`recipe is `, recipe);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to process request' });
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
  requiredBody
};
