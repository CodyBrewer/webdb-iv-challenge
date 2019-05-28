const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const server = express();
const dishesRouter = require('../api/Routes/dishes.js');
const recipesRouter = require('../api/Routes/recipes');

server.use(helmet());
server.use(logger('dev'));
server.use(express.json());
server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

module.exports = server;
