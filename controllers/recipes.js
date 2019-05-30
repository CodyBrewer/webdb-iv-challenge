const express = require('express');

const db = require('../models/recipes');

const recipesRouter = express.Router();

const { validateRecipeId, requiredBody } = require('../middleware/index');
const idbodyCheck = [validateRecipeId, requiredBody];

const { getRecipes, addRecipe, deleteRecipe, updateRecipe } = db;
recipesRouter.use((req, res, next) => {
  console.log('recipesRouter is working');
  next();
});

recipesRouter.get('/', async (req, res) => {
  try {
    const Recipes = await getRecipes();
    console.log(Recipes);
    res.status(200).json(Recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

recipesRouter.get('/:id', validateRecipeId, (req, res) => {
  try {
    res.status(200).json(req.recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

recipesRouter.post('/', async (req, res) => {
  try {
    const recipe = await addRecipe(req.body);
    res.status(201).json(recipe);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

recipesRouter.delete('/:id', validateRecipeId, async (req, res) => {
  try {
    const count = await deleteRecipe(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The recipe has been deleted' });
    } else {
      res.status(404).json({ message: 'The recipe could not be found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

recipesRouter.put('/:id', idbodyCheck, async (req, res) => {
  try {
    const recipe = await updateRecipe(req.params.id, req.body);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: 'The recipe could not be found.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = recipesRouter;
