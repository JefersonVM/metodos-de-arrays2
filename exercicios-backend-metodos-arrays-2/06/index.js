const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const FiltarCidades = (array) => {
    const cidadesComCincoCaracteres = array.filter((item) => item.length <= 8);
    return cidadesComCincoCaracteres;
}

console.log(FiltarCidades(cidades));