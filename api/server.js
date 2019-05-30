const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const server = express();
const dishesRouter = require('../controllers/dishes');
const recipesRouter = require('../controllers/recipes');
const ingredientsRouter = require('../controllers/ingredients');

server.use(helmet());
server.use(logger('dev'));
server.use(express.json());
server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);
server.use('/api/ingredients', ingredientsRouter);

module.exports = server;
