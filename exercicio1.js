const usuarios1 = [
  {
    nome: "Diego",
    idade: 23,
  },
  {
    nome: "Gabriel",
    idade: 15,
  },
  {
    nome: "Lucas",
    idade: 30,
  },
];

const usuarios2 = [
  {
    nome: "Jeferson",
    idade: 42,
  },
  {
    nome: "Rosemeire",
    idade: 57,
  },
  {
    nome: "Carlos",
    idade: 66,
  },
];

const fiscalizarFesta = (array) => {
  const maiorIdade = array.every((usuario) => usuario.idade >= 18);

  if (maiorIdade) {
    console.log("Festa liberada!");
  } else {
    console.log("Possui menor de idade!");
  }
};

fiscalizarFesta(usuarios2);
