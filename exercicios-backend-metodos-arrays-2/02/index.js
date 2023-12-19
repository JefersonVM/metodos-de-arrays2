const palavras = ["livro", "canet", "sol", "carro", "orel"];

const encontrarPalavra = (array) => {
  const resultado = array.some((elemento) => elemento.length > 5);
  if (resultado) {
    console.log("Existe palavra inválida");
  } else {
    console.log("Array validado");
  }
};

encontrarPalavra(palavras);
