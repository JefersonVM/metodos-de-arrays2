const numeros = [10, 987, -886, 0, 12, 199, -45, -67]

const filtrarNumerosPositivos = (numeros) => {
  const numerosPositivos = numeros.filter((numero) => numero > 0)
  return numerosPositivos
}

console.log(filtrarNumerosPositivos(numeros))

