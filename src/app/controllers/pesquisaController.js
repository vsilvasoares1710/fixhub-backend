const todosPrestadores = require("../models/dadosTest/todosPrestadores.js");

module.exports = class PesquisaController {
  static listarTodosPrestadores(req, res) {
    const listaProfissionais = todosPrestadores
      .map( profissional => {
        const {
          id,
          nome,
          icone,
          tags,
          anuncio: { texto, anuncioPago }
        } = profissional;

        const prestador = {
          id,
          nome,
          icone,
          tags,
          anuncio: {
            texto,
            anuncioPago
          }
        };

        const filtros = req.params.tags.split(",");

        if (req.params.tags !== "_") {
          let tagsMatched = 0;
          prestador.tags.map(tag => {
            if (filtros.indexOf(tag) !== -1) {
              tagsMatched += 1;
              // console.log(`A tag ${tag} foi encontrada no profissional ${prestador.nome}`)
            }
          });

          if (tagsMatched === filtros.length) {
            // console.log(`Todas as tags pesquisadas bateram com as tags do profissional ${prestador.nome}`)
            return prestador;
          } else {
            // console.log(`${tagsMatched} tags foram encontradas no profissional ${prestador.nome}`)
            return null;
          }
        } else {
          // console.log("Essa pesquisa retornou todos os profissionais, por não haver tags")
          return prestador;
        }
      })
      .filter(prestadorValido => prestadorValido !== null);

    let profissionais = []

    const organizarProfissionais = () => {
      let profissionaisPagos = []
      let profissionaisGratuitos = []

      listaProfissionais.map(profissional => {
        if (profissional.anuncio.anuncioPago === true) {
          profissionaisPagos.push(profissional)
        } else {
          profissionaisGratuitos.push(profissional)
        }
      })
      profissionais = [profissionaisPagos, profissionaisGratuitos]

      return
    }
    organizarProfissionais()

    const profissionaisPorPagina = 10;

    let paginas = (listaProfissionais.length + 1) / profissionaisPorPagina;

    if (paginas < 1) {
      paginas = 1;
    }

    let tags;

    if (req.params.tags !== "_") {
      tags = req.params.tags;
    }

    const resumoPesquisa = {
      profissionais,
      info: { paginas, profissionaisEncontrados: listaProfissionais.length },
      tags
    };
    return res.send(resumoPesquisa);
  }

  static listarPrestadorEspecifico(req, res) {
    const dadosCompletos = todosPrestadores[req.params.id - 1];

    const { senha, cpf_cnpj, ...dadosPublicos } = dadosCompletos;

    return res.send(dadosPublicos);
  }
};
