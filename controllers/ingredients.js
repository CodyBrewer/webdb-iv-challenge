const express = require('express');

const db = require('../models/ingredients');

const ingredientsRouter = express.Router();

const { validateIngredientId, requiredBody } = require('../middleware/index');
const idBodyCheck = [validateIngredientId, requiredBody];

const {
  getIngredient,
  getIngredients,
  addIngredient,
  deleteIngredient,
  updateIngredient
} = db;

ingredientsRouter.use('/', (req, res, next) => {
  console.log('ingredients router working');
  next();
});

ingredientsRouter.get('/', async (req, res) => {
  try {
    const Ingredients = await getIngredients();
    res.status(200).json(Ingredients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
ingredientsRouter.get('/:id', validateIngredientId, async (req, res) => {
  try {
    res.status(200).json(req.recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
ingredientsRouter.post('/', requiredBody, async (req, res) => {
  try {
    const Ingredient = await addIngredient(req.body);
    res.status(201).json(Ingredient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

ingredientsRouter.delete('/:id', validateIngredientId, async (req, res) => {
  try {
    const count = await deleteIngredient(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The ingredient has been deleted' });
    } else {
      res.status(404).json({ message: 'The ingredient could not be found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
ingredientsRouter.put('/:id', async (req, res) => {
  try {
    const Ingredient = await updateIngredient(req.params.id, req.body);
    if (Ingredient) {
      res.status(200).json(Ingredient);
    } else {
      res.status(404).json({ message: 'The ingredient can not be found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = ingredientsRouter;
