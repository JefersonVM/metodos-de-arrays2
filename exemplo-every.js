const frutas = ["abacaxi", "manga", "melancia"];

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const buscarFruta = frutas.every((fruta) => {
// return fruta !== "manga";
// });

const validarNumeros = numeros.every((numero) => {
    return numero < 9;
});

console.log(validarNumeros);



