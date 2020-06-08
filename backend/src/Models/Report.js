const path = require('path');
const formatDate = require('../utils/formatDate');
const uniqid = require('uniqid');

const knex = require('../database/connection');

function Report() {
    async function create(req, res){

        const trx = await knex.transaction();

        const data = await trx.select('*').from('canister');
        const dataItemsString = data.map(item => JSON.stringify(item));
        const dataString = JSON.stringify(dataItemsString);

        const date = formatDate();

        await trx('report').insert({
            report_id: uniqid(),
            report_date: date,
            report_data: dataString
        });

        await trx.commit();

        console.log("Relatório criado com sucesso")
        return res.json({message: 'success'});

    }

    async function index(req, res){
        const data = await knex.select('*').from('report');
        
        data.forEach(item => {
            item.report_data = JSON.parse(item.report_data);
            item.report_data = item.report_data.map(item => JSON.parse(item));
        })

        return res.json(data);

    }

    return {
        create,
        index
    }
}

module.exports = Report;
