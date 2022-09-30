const express = require('express');
//puxa a biblioteca Express
const consign = require('consign');
//modulo de rotas
const bodyParser = require('body-parser');
//modulo de ler dados no body
const expressValidator = require('express-validator');
//modulo de validar inserção de dados
let app = express();

app.use(bodyParser.urlencoded({ extended: false, limit:'50mb' }));
app.use(bodyParser.json({ limit:'50mb' }));
app.use(expressValidator());

consign().include('routes').include('utils').into(app);
//incluir todas as rotas da pasta 'routes' e atribuindo ao app
app.listen(4000, '127.0.0.1', ()=>{

    console.log('servidor rodando!');

});