const produtos = [
  { nome: "arroz", preco: 500 },
  { nome: "feijão", preco: 400 },
  { nome: "macarrão", preco: 200 },
  { nome: "carne", preco: 1500 },
];


const novoArray = produtos.map((produto) => {
    return {
        nome: produto.nome,
        preco: produto.preco,
        valorDesconto: produto.preco * 0.1 
    };
    });

console.log(novoArray);