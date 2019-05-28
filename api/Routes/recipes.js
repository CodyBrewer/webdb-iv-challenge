const express = require('express');

const db = require('../Models/recipes');

const recipesRouter = express.Router();

const { validateRecipesId } = require('../../Middleware');
const { getRecipes } = db;
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

module.exports = recipesRouter;
