const professores = [
    {
        nome: 'Pedro',
        stack: 'JavaScript'
    },

    {
        nome: 'João',
        stack: 'Python'
    },

    {
        nome: 'Paulo',
        stack: 'Java'
    },

    {
        nome: 'Ana',
        stack: 'JavaScript'
    },

    {
        nome: 'Maria',
        stack: 'Python'
    },

    {
        nome: 'Lucas',
        stack: 'Java'
    }

];

const resultado = professores.filter((professor) => professor.stack === 'JavaScript');

const resultado2 = professores.filter((professor) => professor.stack === 'Python');


console.log(resultado, resultado2);