const letras = [
    'a', 'b', 'c', 'd', 'e'
]

const verificarLetras = (array) => {

    const verifica = array.some(letra => letra === 'a');
    console.log(verifica) 

}

verificarLetras(letras)






