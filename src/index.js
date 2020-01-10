const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const prestadorTeste1Completo = {
  id: 1,
  nome: "Píruleison da Silva Sauro",
  icone: "https://image.flaticon.com/icons/png/512/56/56990.png",
  contato: {
    celular: "11 91234-5678",
    telefone: "11 3911-1234",
    whatsapp: "11 91234-5678",
    email: "contato@silva_sauro_serviços.com"
  },
  tags: [
    "eletricista",
    "pintor",
    "encanador",
    "pedreiro",
    "gesseiro",
    "marceneiro",
    "vidraceiro"
  ],
  redes_sociais: {
    facebook: "facebook.com/piruleison_da_silva",
    linkedin: "linkedin.com/piruleison_da_silva",
    siteOficial: "piruleisonservicos.com"
  },
  anuncio: {
    texto:
      "Tempor pariatur anim esse culpa ullamco dolor ea ea eiusmod. Cupidatat exercitation ipsum ullamco ipsum aute. Culpa ex voluptate laborum deserunt commodo est ullamco labore in ullamco.\nDo velit ad duis dolor magna ullamco id esse dolor incididunt ad dolor ipsum. Laborum aliquip consectetur exercitation id sunt qui. Ullamco ad aliqua quis incididunt occaecat. Pariatur est voluptate do Lorem est aliquip officia sunt enim et sint sit. Consectetur ullamco minim tempor quis labore nulla esse laboris ex labore. Aliqua est id Lorem officia eiusmod aute irure aliquip tempor ex ex occaecat officia officia. Sint eu mollit reprehenderit adipisicing dolor exercitation labore esse nulla dolor veniam cillum aliquip.",
    imagens: [
      "https://cdn.pixabay.com/photo/2019/12/23/15/07/freiburg-4714770_960_720.jpg",
      "https://cdn.pixabay.com/photo/2019/12/25/09/23/north-4718160_960_720.jpg",
      "https://cdn.pixabay.com/photo/2018/12/13/14/24/the-kremlin-3872941_960_720.jpg"
    ]
  }
};
const prestadorTeste2Completo = {
  id: 2,
  nome: "Jubileu Astrogildo de Magalhães",
  icone: "https://image.flaticon.com/icons/png/512/57/57134.png",
  contato: {
    celular: "12 99876-5432",
    whatsapp: "12 99876-5432",
    email: "jubileu_astrogildo@gmail.com"
  },
  tags: ["professor", "musica", "danca", "canto"],
  redes_sociais: {
    facebook: "facebook.com/jubi_jubao",
    siteOficial: "professorastrogildo.com.br"
  },
  anuncio: {
    texto:
      "Tempor pariatur anim esse culpa ullamco dolor ea ea eiusmod. Cupidatat exercitation ipsum ullamco ipsum aute. Culpa ex voluptate laborum deserunt commodo est ullamco labore in ullamco.\n---------------TEXTO DO PRESTADOR 2----------------\nDo velit ad duis dolor magna ullamco id esse dolor incididunt ad dolor ipsum. Laborum aliquip consectetur exercitation id sunt qui.",
    imagens: [
      "https://cdn.pixabay.com/photo/2018/12/13/14/24/the-kremlin-3872941_960_720.jpg",
      "https://cdn.pixabay.com/photo/2019/12/23/15/07/freiburg-4714770_960_720.jpg"
    ]
  }
};

const todosPrestadores = [prestadorTeste1Completo, prestadorTeste2Completo];

const prestadorTeste1Resumo = {
  id: 1,
  nome: "Píruleison da Silva Sauro",
  icone: "https://image.flaticon.com/icons/png/512/56/56990.png",
  tags: [
    "eletricista",
    "pintor",
    "encanador",
    "pedreiro",
    "gesseiro",
    "marceneiro",
    "vidraceiro"
  ],
  anuncio: {
    texto:
      "Tempor pariatur anim esse culpa ullamco dolor ea ea eiusmod. Cupidatat exercitation ipsum ullamco ipsum aute. Culpa ex voluptate laborum deserunt commodo est ullamco labore in ullamco.\nDo velit ad duis dolor magna ullamco id esse dolor incididunt ad dolor ipsum. Laborum aliquip consectetur exercitation id sunt qui. Ullamco ad aliqua quis incididunt occaecat. Pariatur est voluptate do Lorem est aliquip officia sunt enim et sint sit. Consectetur ullamco minim tempor quis labore nulla esse laboris ex labore. Aliqua est id Lorem officia eiusmod aute irure aliquip tempor ex ex occaecat officia officia. Sint eu mollit reprehenderit adipisicing dolor exercitation labore esse nulla dolor veniam cillum aliquip."
  }
};
const prestadorTeste2Resumo = {
  id: 2,
  nome: "Jubileu Astrogildo de Magalhães",
  icone: "https://image.flaticon.com/icons/png/512/57/57134.png",
  tags: ["professor", "musica", "danca", "canto"],
  anuncio: {
    texto:
      "Tempor pariatur anim esse culpa ullamco dolor ea ea eiusmod. Cupidatat exercitation ipsum ullamco ipsum aute. Culpa ex voluptate laborum deserunt commodo est ullamco labore in ullamco.\n---------------TEXTO DO PRESTADOR 2----------------\nDo velit ad duis dolor magna ullamco id esse dolor incididunt ad dolor ipsum. Laborum aliquip consectetur exercitation id sunt qui."
  }
};

const profissionais = [prestadorTeste1Resumo, prestadorTeste2Resumo];

const profissionaisPorPagina = 10;

let paginas = (profissionais.length + 1) / profissionaisPorPagina;

if (paginas < 1) {
  paginas = 1;
}

const resumoPesquisa = {
  profissionais,
  info: { paginas, profissionaisEncontrados: profissionais.length },
};

app.get("/pesquisaProfissionais/:page", (req, res) => {


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
