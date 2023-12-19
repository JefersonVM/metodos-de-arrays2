const numeros = [0, 122, 4, 6, 8, 44, 36];

const validarNumerosPares = (array) => {
  const retorno = array.every((item) => item % 2 === 0);
  if (retorno) {
    return "Array válido";
  } else {
    return "Array inválido";
  }
};

console.log(validarNumerosPares(numeros));
