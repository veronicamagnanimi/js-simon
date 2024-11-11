//prelevo l'id degli elementi
const numberCount = document.getElementById("countdown");
const messageCount = document.getElementById("first-message");
console.log(numberCount, messageCount);
const randomCount = document.getElementById("five-numbers");
console.log(randomCount);




//inner html






//numeri random da 1 a 100 in array con ciclo
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100 ) + 1);
}
console.log(randomNumbers);