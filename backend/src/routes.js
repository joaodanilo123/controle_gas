const express = require('express');
const router = express.Router();

const Canister = require('./Models/Canister')();

router.get('/canister/:type', Canister.listSingle);
router.put('/canister/:type', Canister.update);

/*outer.put('/botijoes', atualizarBotijao);

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
})*/

module.exports = router;