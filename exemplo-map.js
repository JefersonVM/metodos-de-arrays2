const usuarios = [
  {
    nome: "Diego",
    sobrenome: "Rocketseat",
    idade: 23,
  },
  {
    nome: "Gabriel",
    sobrenome: "Rocketseat",
    idade: 15,
  },
  {
    nome: "Lucas",
    sobrenome: "Rocketseat",
    idade: 30,
  },
];

const novoArray = usuarios.map((usuario) => {
  return {
    nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`,
    idade: usuario.idade,
  };
});

console.log(novoArray);
