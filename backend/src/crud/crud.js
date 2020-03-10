const Connection = require('../connection');
const util = require('util');
const uniqid = require('uniqid');
const query = util.promisify(Connection.query).bind(Connection);
const formatDate = require('../utils/formatDate');

async function listarBotijao() {
    const botijoes = await query('SELECT * FROM botijao');

    return botijoes;
    
}

function atualizarBotijao(req, res) {
    const { body } = req;

    const sql = `UPDATE botijao SET 
        botijao_vazios=${body.vazios}, 
        botijao_cheios=${body.cheios}, 
        botijao_emprestados=${body.emprestados},
        botijao_atualizacao=CURRENT_DATE()
        WHERE botijao_tipo='${body.tipo}'`;

    Connection.query(sql, (err, result) => {
        if (err) return res.json(err);
        res.json(body)
    })
}

async function listarRelatorio() {
    const sql = "SELECT * FROM relatorio";
    return query(sql);
}

async function carregarRelatorio(relatorioId) {
    const sql = `SELECT * FROM relatorio WHERE relatorio_id='${relatorioId}'`;
    return query(sql);
}

async function gerarRelatorio() {
    const botijoes =  JSON.stringify(await listarBotijao())
    
    const sql = `INSERT INTO relatorio VALUES (
        '${uniqid()}',
        NOW(),
        '${botijoes}'
    )`; 
    
    query(sql) 
}


module.exports = {
    listarBotijao,
    atualizarBotijao,
    gerarRelatorio,
    listarRelatorio,
    carregarRelatorio
}