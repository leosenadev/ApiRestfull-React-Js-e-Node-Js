# Backend - leosenadev - leonardo santos sena

## Running the server

Run `npm start` or `yarn start` to run the server on `http://localhost:3000/`. The server will **not** automatically reload if you change any of the source files.

# Dependências utilizado

* npm install express --save
* npm i cors

# Decisões de implementação tomadas.

* Criei uma const com nome functions, fazendo uma require a pasta database e utilizando functions.js para utilizar os metodos.

* rota /clientes  com o verbo GET - lista todos os cliente utilizando o metodo getAll() passando como parametro users. 

* rota com o verbo GET /cliente/:id com o verbo GET  - lista o cliente requisitando o ID(email) e atribuindo ao metodo getOne() o parametro users e o id.

* rota com o verbo GET  /oportunidades/:id - lista todas as oportunidades requisitando o id(email) e atribuindo o metodo getOne() o parametro opportunities e o id
* rota /update/:key com o verbo PUT para realizar as novas atribuições -
requisitando a key(email), o valor e atribuindo ao metodo update() o parametro opportunities, key(email) e o vl com o novos dados modificados.

* Todas as rotas contém uma estrutura try catch para verificação de erros