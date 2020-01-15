const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const todosPrestadores = require("./database/todosPrestadores");
const pesquisa = require("./database/pesquisa");
const profissionais = pesquisa.profissionais;
const paginas = pesquisa.paginas;
const filtros = require("./database/filtros")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/profissionais/:tags/:page", (req, res) => {

  const resumoPesquisa = {
    profissionais,
    info: { paginas, profissionaisEncontrados: profissionais.length }
  };
  res.send(resumoPesquisa);
});

app.get("/profissionais/:id", (req, res) => {

  const profissionalCompleto = todosPrestadores[req.params.id - 1];

    res.send(profissionalCompleto);

});

app.get("/filtros", (req, res) => {

  res.send(filtros);
});

console.log("BackEnd Rodando...");

app.listen(4000);
