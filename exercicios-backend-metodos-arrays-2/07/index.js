const endereços = [
  { cep: 00111222, rua: "Rua dos Artistas" },
  { cep: 00111333, rua: "Rua Augusta" },
  { cep: 00222444, rua: "Avenida Paralela" },
  { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const encontrarEndereço = (array, cep) => {
  const endereço = array.find((item) => item.cep === cep);
  if (endereço) {
    return endereço.rua;
  } else {
    return "Endereço não encontrado";
  }
}

console.log(encontrarEndereço(endereços, 00222444));
