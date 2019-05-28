const express = require('express');

const db = require('../Models/dishes');

const dishesRouter = express.Router();
const { validateDishesId } = require('../../Middleware');
const { getDishes, addDish } = db;

dishesRouter.use((req, res, next) => {
  console.log('dishRouter working');
  next();
});

dishesRouter.get('/', async (req, res) => {
  try {
    const Dishes = await getDishes();
    console.log(Dishes);
    res.status(200).json(Dishes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

dishesRouter.get('/:id', validateDishesId, (req, res) => {
  try {
    res.status(200).json(req.dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

dishesRouter.post('/', async (req, res) => {
  try {
    const dish = await addDish(req.body);
    res.status(201).json(dish);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = dishesRouter;
