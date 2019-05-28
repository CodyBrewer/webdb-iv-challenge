const express = require('express');

const db = require('../Models/recipes');

const recipesRouter = express.Router();

const { validateRecipesId } = require('../../Middleware');
const { getRecipes, addRecipe } = db;
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

recipesRouter.post('/', async (req, res) => {
  try{
    const recipe = await addRecipe(req.body);
    res.status(201).json(recipe);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message});
  }
})

module.exports = recipesRouter;
