const express = require('express');
const router = express.Router();
const {
    listarBotijao,
    atualizarBotijao,
    gerarRelatorio,
    listarRelatorio,
    carregarRelatorio } = require('./crud/crud');

const formatDate = require('./utils/formatDate');

router.get('/botijoes', async (req, res) => {
    res.json(await listarBotijao())
})

router.put('/botijoes', atualizarBotijao);

router.get('/relatorios', async (req, res) => {
    
    let relatorios = await listarRelatorio();

    relatorios.map(rel => {
        rel.relatorio_data = formatDate(rel.relatorio_data);
    })

    res.json(relatorios);
})

router.post('/relatorio', async (req, res) => {
    gerarRelatorio().then(() => {
        res.end()
    })
})

router.get('/teste', (req, res)=>{
    res.send('Conseguiu mandar')
})

module.exports = router;