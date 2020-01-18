const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const todosPrestadores = require("./app/models/dadosTest/todosPrestadores");
const pesquisa = require("./app/controllers/pesquisaController");
const profissionais = pesquisa.profissionais;
const paginas = pesquisa.paginas;
const filtros = require("./app/models/dadosTest/filtros");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rota de retorno de filtros
app.get("/filtros", (req, res) => {
  res.send(filtros);
});

// Rota de pesquisa de profissionais
app.get("/profissionais/:tags/:page", (req, res) => {
  const resumoPesquisa = {
    profissionais,
    info: { paginas, profissionaisEncontrados: profissionais.length }
  };
  res.send(resumoPesquisa);
});

// Rota de retorno de informações públicas de um profissional em específico
app.get("/profissionais/:id", (req, res) => {
  const profissionalCompleto = todosPrestadores[req.params.id - 1];

  const { senha, cpf_cnpj, ...dadosPublicos } = profissionalCompleto;

  res.send(dadosPublicos);
});

// Rota de cadastro de profissionais
app.post("/profissionais", (req, res) => {
  const profissionalCompleto = todosPrestadores[req.params.id - 1];

  const { senha, ...dadosPublicos } = profissionalCompleto;

  res.send(dadosPublicos);
  // Recebe informações para cadastro de cliente na plataforma e devolve o id do profissional cadastrado no banco de dados com status 200 em caso de sucesso. Em caso de falha retorna undefined com status de erro.
});

// Rota de alteração de senha do profissional
app.patch("/profissionais/:cpf_cnpj", (req, res) => {
  res.send(`Senha do profissional de ID: ${20} alterada com sucesso`);
  // Recebe o cpf_cnpj como parametro pela rota e o email ou telefone do profisisonal e a senha nova no corpo da requisição, devolve o id do usuário cuja senha foi atualizada, com status 200 em caso de sucesso. Em caso de falha, falta de email/cpf_cnpj ou senha semelhante à anterior retorna undefined com status de erro.
});

// Rota de retorno de informações privadas do profissional
app.post("/profissionais/:id", (req, res) => {
  res.send(`Perfil do profissional de ID: ${20} alterada com sucesso`);
  // Requer token de autenticação. Recebe o id do profisional como parametro e um json dentro do corpo da requisição com o token de autenticação. Retorna todos os dados do profissional, exceto à senha e o status 200 em caso de sucesso. Em caso de falha retorna undefined com status de erro.
});

// Rota de alteração de dados cadastrais do profissional
app.put("/profissionais/:id", (req, res) => {
  res.send(`Perfil do profissional de ID: ${20} alterada com sucesso`);
  // Requer token de autenticação. Recebe o id do profisional como parametro e um json dentro do corpo da requisição com os todos os dados do profissional para serem atualizados no banco e com o token de autenticação. Retorna o id do profissional com status 200 em caso de sucesso. Em caso de falha retorna undefined com status de erro.
});

// Rota de remoção do profissional da plataforma
app.delete("/profissionais/:id", (req, res) => {
  res.send(`Perfil do profissional de ID: ${20} alterada com sucesso`);
  // Requer token de autenticação. Recebe o id do profisional como parametro e um json dentro do corpo da requisição com o cpf_cnpj, o token de autenticação e o nome completo do profissional para serem deletados do banco. Em cao de sucesso retorna status 200. Em caso de falha retorna status de erro.
});

console.log("BackEnd Rodando...");

app.listen(4000);
