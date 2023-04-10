# Web Service

Cliente faz requisição POST para o servidor;

Servidor recebe a requisição e cria um código de barras aleatório junto a um valor informado pelo cliente;

Servidor retorna como resposta o código de barras/valor em formato JSON para o cliente.

_Disciplina: Sistemas Distribuidos_

Alunos(a): Nayse Fagundes e Gabriel Farias

## Tema 7: Compra de ticket do Restaurante universitário

o cliente informa matricula e valor a ser pago

o servidor responde: código de barras e valor total


## Instalação


É preciso ter Node.js, npm e Express.js instalados. (https://nodejs.org/en/)

### Configurarndo o ambiente:

Dentro do diretório com o códigos instale as bibliotecas necessárias:

**IMPORTANTE: execute npm install dentro na pasta com os arquivos para instalar TODOS os modulos**

```
npm install 

npm install express

npm install readline-sync

pip install uuid

```

## Execução

Dentro do diretório da pasta com os arquivos do código execute o arquivo do servidor:

```
node servidor_webserv.js
```

Em seguida execute o arquivo do cliente: 

```
node cliente_webserv.js
```

Informe o _número de matricula_ e _valor_ a ser pago pelos Tickets. O programa retornará o código de barras e o valor total.


