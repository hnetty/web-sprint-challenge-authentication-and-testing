const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findById,
    find,
    findBy,
};

function find() {
    return db('users').select('id', 'username').orderBy('id');
}

function findBy(filter){
    return db('users as u')
        .where(filter)
        .select('u.id', 'u.username', 'u.password')
        .orderBy('u.id');
}

function findById(id){
    return db('users').where({ id }).first();
}

async function add(user) {
    try{
        const [id] = await db('users').insert(user, 'id');
        return findById(id);
    } catch(error){
        throw error;
    }
}