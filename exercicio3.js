const carros = [
  {
    nome: "Gol",
    marca: "Volkswagen",
    ano: 2012,
    cor: "Preto",
  },

  {
    nome: "Uno",
    marca: "Fiat",
    ano: 2011,
    cor: "Vermelho",
  },

  {
    nome: "Celta",
    marca: "Chevrolet",
    ano: 2010,
    cor: "Branco",
  },

  {
    nome: "Palio",
    marca: "Fiat",
    ano: 2012,
    cor: "Branco",
  },

  {
    nome: "Clio",
    marca: "Renault",
    ano: 2013,
    cor: "Preto",
  },

  {
    nome: "Golf",
    marca: "Volkswagen",
    ano: 2012,
    cor: "Preto",
  },

  {
    nome: "Sandero",
    marca: "Renault",
    ano: 2015,
    cor: "Branco",
  },

  {
    nome: "Fiesta",
    marca: "Ford",
    ano: 2012,
    cor: "Vermelho",
  },

  {
    nome: "Corsa",
    marca: "Chevrolet",
    ano: 2011,
    cor: "Preto",
  },

  {
    nome: "Punto",
    marca: "Fiat",
    ano: 2013,
    cor: "Branco",
  },
];

const encontrarDadosCarros = (marca, array) => {
  array.find((carro) => {
    if (carro.marca === marca) {
      console.log(carro);
    }
  });
};

encontrarDadosCarros("Fiat", carros);
