const readlineSync = require('readline-sync');
const fetch = require('node-fetch');


const matricula = readlineSync.question('Digite sua matrícula: ');
const valor_informado = parseInt(readlineSync.question('Digite o valor dos Tickets a ser pagos: '));

//porta 8000
const comprarTicket = async (matricula, valor_informado) => {
  const resposta_serv = await fetch('http://localhost:8000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({matricula, valor_informado})
  });
  //codigo de barras e valor recebidos do servidor //
  
  const {codigo_de_barras, valor_informado: valor_total} = await resposta_serv.json();
  console.log(`------------------------------------------------------------------`);
  console.log(`Código de Barras para pagamento: ${codigo_de_barras}`);
  console.log(`valor total a ser pago: ${valor_total}`);
  console.log(`-----------------------------------------------------------------`);
}

comprarTicket(matricula, valor_informado);
