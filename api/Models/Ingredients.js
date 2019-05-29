const db = require('../../data/dbConfig');

const getIngredients = () => {
  return db('ingredients');
};

const getIngredient = id => {
  return db('ingredients')
    .where({ id })
    .first();
};
const addIngredient = ingredient => {
  return db('ingredients').insert(ingredient);
};
const deleteIngredient = id => {
  return db('ingredients')
    .where('ingredients.id', id)
    .delete();
};
const updateIngredient = (id, changes) => {
  console.log(`id is `, id, `body is`, changes);
  return db('ingredients')
    .where({ id })
    .update(changes);
};
module.exports = {
  getIngredient,
  getIngredients,
  addIngredient,
  deleteIngredient,
  updateIngredient
};
