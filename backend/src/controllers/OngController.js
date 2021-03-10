const connection = require("../database/connection"); //conexão com o banco de dados
const crypto = require('crypto'); //gera o id randomicamente 


module.exports = {

  //função responsável por listar as ongs cadastradas
  async index(request, response) {
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs); 
  },

  //função responsável por cadastrar a ong
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX'); 

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
    }
} 