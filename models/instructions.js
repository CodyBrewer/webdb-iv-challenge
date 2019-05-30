const db = require('../data/dbConfig');

const getInstructions = () => {
  return db('instructions');
};

const getInstruction = id => {
  return db('instructions')
    .where({ id })
    .first();
};

const addInstruction = instruction => {
  return db('instructions').insert(instruction);
};

const deleteInstruction = id => {
  return db('instructions')
    .where({ id })
    .delete();
};

const updateInstruction = (id, changes) => {
  return db('instructions')
    .where({ id })
    .update(changes);
};

module.exports = {
  getInstruction,
  getInstructions,
  addInstruction,
  deleteInstruction,
  updateInstruction
};
