const express = require('express');
const cors = require('cors');
const routes = require('./routes'); 

//cria a aplicação
const app = express();

//módulo de segurança
app.use(cors());
//converte o json recebido em um objeto entendível pelo JS
app.use(express.json());
//utiliza as rotas do arquivo routes.js
app.use(routes); 

app.listen(3333);