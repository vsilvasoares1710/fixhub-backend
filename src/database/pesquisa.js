const todosPrestadores = require("./todosPrestadores.js")

const profissionais = todosPrestadores.map((value, index) => {
    const { id, nome, icone, tags, anuncio: {texto} } = todosPrestadores[index];
    
    const prestadorTeste1Resumo = {
        id,
        nome,
        icone,
        tags,
        anuncio: {
            texto
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
