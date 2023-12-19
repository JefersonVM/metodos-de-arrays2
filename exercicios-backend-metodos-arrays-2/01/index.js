const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Cem Anos de Solidão";

function encontreUmLivro(nomeDoLivro, livros) {
    
    let resultado = livros.findIndex(function(livro){
        return livro === nomeDoLivro;
    });
    return `O livro está na posição ${resultado + 1}`;
}

console.log(encontreUmLivro(nomeDoLivro, livros));