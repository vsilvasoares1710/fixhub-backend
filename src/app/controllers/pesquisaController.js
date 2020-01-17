const todosPrestadores = require("../models/dadosTest/todosPrestadores.js")

const profissionais = todosPrestadores.map((value, index) => {
    const { id, nome, icone, tags, anuncio: {texto, anuncioPago} } = todosPrestadores[index];
    
    const prestadorTeste1Resumo = {
        id,
        nome,
        icone,
        tags,
        anuncio: {
            texto,
            anuncioPago
        }
    }
    return prestadorTeste1Resumo
})

const profissionaisPorPagina = 10;

let paginas = (profissionais.length + 1) / profissionaisPorPagina;

if (paginas < 1) {
  paginas = 1;
}
const pesquisa = { profissionais, paginas };
module.exports = pesquisa
