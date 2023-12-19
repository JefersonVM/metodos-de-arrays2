const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const encontrarProduto = (array) => {
  const retorno = array.some((item) => {
    return item === "cerveja" || item === "vodka";
  });

  if (retorno) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!");
  } else {
    console.log("tudo certo, vamos as compras!");
  }
};

encontrarProduto(palavras);
