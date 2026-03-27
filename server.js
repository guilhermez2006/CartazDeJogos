const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('src'));

const routes = require('./src/main');
app.use(routes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
})