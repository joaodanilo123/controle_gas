const uniqid = require('uniqid');
const formatDate = require('../utils/formatDate');

async function listarRelatorio() {
    const sql = "SELECT * FROM relatorio";
    //return query(sql);
}

async function carregarRelatorio(relatorioId) {
    const sql = `SELECT * FROM relatorio WHERE relatorio_id='${relatorioId}'`;
    //return query(sql);
}

async function gerarRelatorio() {
    const botijoes =  JSON.stringify(await listarBotijao())
    
    const sql = `INSERT INTO relatorio VALUES (
        '${uniqid()}',
        NOW(),
        '${botijoes}'
    )`; 
    
    //query(sql) 
}


module.exports = {
    listarBotijao,
    atualizarBotijao,
    gerarRelatorio,
    listarRelatorio,
    carregarRelatorio
}