const express = require('express');

const db = require('../models/dishes');

const dishesRouter = express.Router();
const { validateDishesId, requiredBody } = require('../middleware/index');
const idBodyCheck = [validateDishesId, requiredBody];
const { getDishes, addDish, deleteDish, updateDish } = db;

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

dishesRouter.delete('/:id', validateDishesId, async (req, res) => {
  try {
    const count = await deleteDish(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The Dish has been deleted' });
    } else {
      res.status(404).json({ message: 'The Dish could not be found' });
    }
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

dishesRouter.put('/:id', idBodyCheck, async (req, res) => {
  try {
    const dish = await updateDish(req.params.id, req.body);
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: 'The dish could not be found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = dishesRouter;
