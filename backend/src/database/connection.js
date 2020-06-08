const Knex = require('knex');
const path = require('path');

const knex = Knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, './database.db'),
        useNullAsDefault: true
    }
})

module.exports = knex;