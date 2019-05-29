const db = require('../../data/dbConfig')

const getIngredients = () =>{
    return db('ingredients')
}

const getIngredient = (id) =>{
    return db('ingredients').where({ id}).first()
}
const addIngredient = (ingredient) =>{
    return db('ingredients').insert(ingredient)
}
const deleteIngredient = (id) => {
    return db('ingredients').where({id}).delete()
}
const updateIngredient = (id, changes) => {
    return db('ingredients').where({id}).update(changes)
}
module.exports = { getIngredient, getIngredients, addIngredient, deleteIngredient, updateIngredient}


