const carros = [
    { nome: 'Fiat Uno', ano: 2001 },
    { nome: 'Fiat Toro', ano: 2019 },
    { nome: 'Fiat Mobi', ano: 2018 },
    { nome: 'Fiat Strada', ano: 2014 },
    { nome: 'Fiat Argo', ano: 2017 },
    { nome: 'Fiat Cronos', ano: 2018 },
    { nome: 'Fiat Siena', ano: 2010 },
    { nome: 'Fiat Palio', ano: 2005 },
    { nome: 'Fiat 500', ano: 2015 },
    { nome: 'Fiat Doblo', ano: 2012 },
];

const resultado = carros.findIndex((carro) => carro.nome === 'Fiat Toro');

console.log(resultado); // 1