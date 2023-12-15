// const interval =  setInterval(() => {
//     console.log(interval);
//     clearInterval(interval);
// }, 5000 );

// const contador = () => {
//     let i = 0;
//     const interval = setInterval(() => {
//         console.log(i++);
//         if (i > 10) {
//             clearInterval(interval);
//         }
//     }, 1000);
// }

// contador();

const contador = () => {
    let i = 10;
    const interval = setInterval(() => {
        console.log(i--);
        if (i == 0) {
            clearInterval(interval);
            console.log("Feliz ano novo!");
        }
    }, 1000);
}

contador();

