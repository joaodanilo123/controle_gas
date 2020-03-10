const mysql = require('mysql');

try {
    const Connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: "controle_gas"
    });

    module.exports = Connection;
} catch (error) {
    console.log(error);
}




