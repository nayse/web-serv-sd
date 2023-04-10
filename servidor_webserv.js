const express = require('express');
const { v4: uuidv4 } = require('uuid');

const restataurante_universitario = express();

restataurante_universitario.use(express.json());

restataurante_universitario.post('/', (requisicao, resposta) => {
  const { matricula, valor_informado } = requisicao.body;

  const codigo_de_barras = uuidv4().replace(/-/g, '').slice(0, 48);

  resposta.json({ codigo_de_barras, valor_informado});

});

restataurante_universitario.listen(8000, () => {
  console.log('Servidor está rodando na porta 8000');
  
});
