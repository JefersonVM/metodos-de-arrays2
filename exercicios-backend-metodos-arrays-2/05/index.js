const usuarios = [
    {
      nome: "André",
      idade: 29,
      habilitado: true,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: true,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];

    const validarHabilitacao = (array) => {
        const habilitados = array.filter((item) => item.idade >= 18 && item.idade <= 65);
        const retorno = habilitados.every((item) => item.habilitado === true);
        if (retorno) {
            return "Todos passaram no teste";
        } else {
            return "Todos precisam estar habilitados";
        }
    };

    console.log(validarHabilitacao(usuarios));