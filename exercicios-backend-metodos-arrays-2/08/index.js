const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasMaiusculas = frutas.map((fruta, index) => {
  fruta = fruta.toLowerCase();
  fruta = fruta.charAt(0).toUpperCase() + fruta.slice(1);

  return `${index} - ${fruta}`;
});

console.log(frutasMaiusculas);
