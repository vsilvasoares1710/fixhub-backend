const prestador1 = {
  id: 1,
  nome: "João da Silva",
  cpf_cnpj: "12345678901234",
  icone: "https://image.flaticon.com/icons/png/512/56/56990.png",
  contato: {
    celular: "11 91234-5678",
    telefone: "11 3911-1234",
    whatsapp: "11 91234-5678",
    email: "contato@silvaserviços.com"
  },
  tags: [
    "eletricista",
    "pintor",
    "encanador",
    "pedreiro"
  ],
  localização: {
    endereço: "Avenida Paulista, 385",
    bairro: "Centro",
    cidade: "São Paulo",
    estado: "SP"
  },
  redes_sociais: {
    facebook: "facebook.com/joao_da_silva",
    linkedin: "linkedin.com/joao_da_silva",
    siteOficial: "silvaservicos.com"
  },
  anuncio: {
    texto:
      "Tempor pariatur anim esse culpa ullamco dolor ea ea eiusmod. Cupidatat exercitation ipsum ullamco ipsum aute. Culpa ex voluptate laborum deserunt commodo est ullamco labore in ullamco.\nDo velit ad duis dolor magna ullamco id esse dolor incididunt ad dolor ipsum. Laborum aliquip consectetur exercitation id sunt qui. Ullamco ad aliqua quis incididunt occaecat. Pariatur est voluptate do Lorem est aliquip officia sunt enim et sint sit. Consectetur ullamco minim tempor quis labore nulla esse laboris ex labore. Aliqua est id Lorem officia eiusmod aute irure aliquip tempor ex ex occaecat officia officia. Sint eu mollit reprehenderit adipisicing dolor exercitation labore esse nulla dolor veniam cillum aliquip.",
    imagens: [
      "https://cdn.pixabay.com/photo/2019/12/23/15/07/freiburg-4714770_960_720.jpg",
      "https://cdn.pixabay.com/photo/2019/12/25/09/23/north-4718160_960_720.jpg",
      "https://cdn.pixabay.com/photo/2018/12/13/14/24/the-kremlin-3872941_960_720.jpg"
    ],
    anuncioPago: false
  },
  senha: "54fge4g5649",
};
const prestador2 = {
  id: 2,
  nome: "Matheus de Magalhães",
  cpf_cnpj: "23456789012345",
  icone: "https://image.flaticon.com/icons/png/512/57/57134.png",
  contato: {
    celular: "12 99876-5432",
    whatsapp: "12 99876-5432",
    email: "MatheusDeMag@gmail.com"
  },
  tags: [
    "espanhol",
    "francês",
    "inglês"
  ],
  localização: {
    endereço: "Avenida Antônio Carlos Costa, 321",
    bairro: "Bela Vista",
    cidade: "Osasco",
    estado: "SP"
  },
  redes_sociais: {
    facebook: "facebook.com/matheusdemag",
    siteOficial: "professormatheus.com.br"
  },
  anuncio: {
    texto:
      "Tempor pariatur anim esse culpa ullamco dolor ea ea eiusmod. Cupidatat exercitation ipsum ullamco ipsum aute. Culpa ex voluptate laborum deserunt commodo est ullamco labore in ullamco.\n---------------TEXTO DO PRESTADOR 2----------------\nDo velit ad duis dolor magna ullamco id esse dolor incididunt ad dolor ipsum. Laborum aliquip consectetur exercitation id sunt qui.",
    imagens: [
      "https://cdn.pixabay.com/photo/2018/12/13/14/24/the-kremlin-3872941_960_720.jpg",
      "https://cdn.pixabay.com/photo/2019/12/23/15/07/freiburg-4714770_960_720.jpg"
    ],
    anuncioPago: true
  },
  senha: "54fge4g5649",
};
const prestador3 = {
  id: 2,
  nome: "Jorge Peçanha",
  cpf_cnpj: "34567890123456",
  icone: "https://image.flaticon.com/icons/png/512/57/57134.png",
  contato: {
    celular: "12 99876-5432",
    whatsapp: "12 99876-5432",
    email: "MatheusDeMag@gmail.com"
  },
  tags: [
    "gesseiro",
    "eletricista",
    "pintor"
  ],
  localização: {
    endereço: "Rua Geishofer, 161",
    bairro: "Jardim Baruch",
    cidade: "Guarulhos",
    estado: "SP"
  },
  anuncio: {
    texto:
      "Tempor pariatur anim esse culpa ullamco dolor ea ea eiusmod. Cupidatat exercitation ipsum ullamco ipsum aute. Culpa ex voluptate laborum deserunt commodo est ullamco labore in ullamco.---------------TEXTO DO PRESTADOR 3----------------Do velit ad duis dolor magna ullamco id esse dolor incididunt ad dolor ipsum. Laborum aliquip consectetur exercitation id sunt qui.",
    anuncioPago: true
  },
  senha: "54fge4g5649",
};
const todosPrestadores = [prestador1, prestador2, prestador3];
module.exports = todosPrestadores;
