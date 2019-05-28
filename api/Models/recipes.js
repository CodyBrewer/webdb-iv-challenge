db = require('../../data/dbConfig');

const getRecipes = () => {
  return db('recipes');
};

module.exports = { getRecipes };
