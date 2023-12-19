const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const filtrarNumerosPares = (numeros) => {
    const numerosPares = numeros.filter((numero) => numero % 2 === 0);
    return numerosPares;
}

console.log(filtrarNumerosPares(numeros));


