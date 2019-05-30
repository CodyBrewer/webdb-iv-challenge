const express = require('express');

const db = require('../models/instructions');

const instructionsRouter = express.Router();

const { validateInstructionId, requiredBody } = require('../middleware/index');
const idbodyCheck = [validateInstructionId, requiredBody];

const {
  getInstructions,
  addInstruction,
  deleteInstruction,
  updateInstruction
} = db;
instructionsRouter.use((req, res, next) => {
  console.log('instructionsRouter is working');
  next();
});

instructionsRouter.get('/', async (req, res) => {
  try {
    const instructions = await getInstructions();
    res.status(200).json(instructions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

instructionsRouter.get('/:id', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

instructionsRouter.get('/', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

instructionsRouter.get('/', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

instructionsRouter.get('/', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = instructionsRouter;
