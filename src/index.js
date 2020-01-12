const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const todosPrestadores = require("./database/todosPrestadores");
const pesquisa = require("./database/pesquisa");
const profissionais = pesquisa.profissionais;
const paginas = pesquisa.paginas;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/pesquisaProfissionais/:page", (req, res) => {

  const resumoPesquisa = {
    profissionais,
    info: { paginas, profissionaisEncontrados: profissionais.length }
  };
  res.send(resumoPesquisa);
});

app.post("/profissional/:id", (req, res) => {
  
  const profissionalCompleto = todosPrestadores[req.params.id - 1];

  const { contato, ...informacoesPublicas } = profissionalCompleto;

  if (req.body.token) {
    res.send(profissionalCompleto);
  } else {
    res.send(informacoesPublicas);
  }
});

console.log("BackEnd Rodando...");

app.listen(4000);
