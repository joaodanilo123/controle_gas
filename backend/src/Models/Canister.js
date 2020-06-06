const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const formatDate = require('../utils/formatDate');

function Canister() {
    const Database = new sqlite3.Database(path.join(__dirname, '../database/database.db'));

    function update(req, res) {
        const { body } = req;
        const { type } = req.params;

        const params = [body.full, body.empty, body.loan, type]

        Database.run(`UPDATE canister SET 
            canister_full=?, 
            canister_empty=?, 
            canister_loan=?, 
            canister_update=datetime('now', 'localtime') 
            WHERE canister_type=?
        `, params, ()=>{
            console.log(`Botijões ${type} atualiazados.`);
            res.end()
        });

    }

    async function listSingle(req, res) {
        const { type } = req.params;
        Database.get(`SELECT * FROM canister WHERE canister_type=?`, type , (err, row) => {
            row.canister_update = formatDate(row.canister_update);
            res.json(row);
        });    
    }
    return {
        update,
        listSingle,
    }
}

module.exports = Canister;
