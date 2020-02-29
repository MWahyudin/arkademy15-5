// Function to generate random number 

let randommize = function (n) {
    let angka = []
    let max = 30
    let min = 1
    for (let i = 0; i < n; i++) {
        angka.push(Math.floor(Math.random() * (max - min) + min));
    }
   console.log(angka);
   console.log( " Sum:" + angka.reduce((a,b) => a + b,0));
   
   
}
