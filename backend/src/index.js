const express = require('express');
const cors = require('express');
const ip = require('ip').address();

const router = require('./routes')

const app = express();

app.use(cors());
app.use(express.json())
app.use(router)

const port = 3333;

app.listen(port, ip, null, () => {
    console.clear();
    console.log('Servidor iniciado');
    console.table({port, ip})
})