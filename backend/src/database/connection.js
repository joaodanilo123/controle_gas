const sqlite3 = require('sqlite3');
const Database = new sqlite3.Database('./database.db');

module.exports = Database;