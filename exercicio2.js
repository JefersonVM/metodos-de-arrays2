const nomeDeArquivos1 = [
  "arquivo1.txt",
  "arquivo2.txt",
  "arquivo3.txt",
  "arquivo4.txt",
  "arquivos5.txt"
];

const nomeDeArquivos2 = [
    "arquivo1.txt",
    "arquivo2.txt",
    "arquivo3.txt",
    "arquivo4.txt",
    "arquivos5.bat"
  ];

// const filtrarVirus = (array) => { 
//   const arquivos = array.some((arquivo) => {
//     if (arquivo.slice(-4) === ".bat") {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   if (arquivos) {
//     console.log("vírus detectado");
//   } else {
//     console.log("nenhum vírus encontrado");
//   }
// };

const filtrarVirus = (array) => { 
    const arquivos = array.some((arquivo) => {
      
      if (arquivo.indexOf(".bat") !== -1) {
        return true;
      } else {
        return false;
      }
    });
  
    if (arquivos) {
      console.log("vírus detectado");
    } else {
      console.log("nenhum vírus encontrado");
    }
  };

filtrarVirus(nomeDeArquivos1);
