const usuarios = [
    { nome: 'João', idade: 18 },
    { nome: 'Maria', idade: 23 },
    { nome: 'José', idade: 30 },
    { nome: 'Paulo', idade: 25 },
    { nome: 'Ana', idade: 22 },
]

const encontrarUsuario = (array) => {
    const usuario = array.find((usuario) => {
        if (usuario.nome === 'João') {
            return true;
        } else {
            return false;
        }
    });
    return usuario;



}

console.log(encontrarUsuario(usuarios));