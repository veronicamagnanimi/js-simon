//prelevo l'id degli elementi
const numberCount = document.getElementById("countdown");
const messageCount = document.getElementById("first-message");
const btnCount = document.getElementById("start-btn");
console.log(numberCount, messageCount, btnCount);
const randomCount = document.getElementById("five-numbers");

//prelevo l'id degli elementi del form
const formElem = document.getElementById("form-numbers");
const btnElem = document.getElementById("btn-value");
console.log(formElem, btnElem);





//innerHTML numeri random


//quando clicco sul bottone, parte il countdown
let counter = 30;

btnCount.addEventListener("click", function() {
    const intervalId = setInterval(function() {
        numberCount.innerHTML = counter;
        counter--;   

        if(counter === 0) {
            clearInterval(intervalId);
            btnCount.disabled = true;
        }
    })
    
}, 1000);


//appare il form una volta finito il countdown













//numeri random da 1 a 100 in array con ciclo
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100 ) + 1);
}
console.log(randomNumbers);

