const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];

  const FiltrarNomes = (array) => {
    return array.filter((nome) => nome[0] === "A" || nome[0] === "a");
  }

    console.log(FiltrarNomes(nomes));