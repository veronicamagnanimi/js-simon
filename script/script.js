//prelevo l'id degli elementi
let randomNumbers = [];
let array = [];
const userNumbers = [];
const numberCount = document.getElementById("countdown");
const messageCount = document.getElementById("first-message");
const btnCount = document.getElementById("start-btn");
console.log(numberCount, messageCount, btnCount);
const randomCount = document.getElementById("five-numbers");

//prelevo l'id degli elementi del form
const formElem = document.getElementById("form-numbers");
const btnElem = document.getElementById("btn-value");
console.log(formElem, btnElem);
const secondElem = document.getElementById("second-part");
console.log(secondElem);
resultElem = document.getElementById("result");


//numeri random da 1 a 100 in array con ciclo
for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    array.push(randomNum);
    randomCount.innerHTML +=  `<div>${randomNum}</div>`
}
console.log(array);


//quando clicco sul bottone, parte il countdown
let counter = 30;

btnCount.addEventListener("click", function() {
    randomCount.classList.remove("d-none");
    const intervalId = setInterval(function() {
        numberCount.innerHTML = counter;
        counter--;   

        if(counter < 0) {
            clearInterval(intervalId);
            btnCount.disabled = true;
            randomCount.classList.add("d-none");
            secondElem.classList.remove("d-none");
        }
    }, 200);
});



//evento per i numeri
formElem.addEventListener("submit", function(event) {
    console.log("submit");
    event.preventDefault();
    const userNumbers = document.querySelectorAll("input");
    console.log(userNumbers);
    for (let i = 0; i < userNumbers.length; i++) {
        curItem = userNumbers[i];
        if (randomCount.includes(curItem)) {
            numbUser.push(curItem);
        }
    }
    console.log(numbUser);

    
    resultElem.classList.remove("d-none");
    resultElem.innerHTML = `Hai indovinato ${numberUser.length} numeri (${numberUser})`;
});

















// formElem.addEventListener("submit", function(event) {
//     event.preventDefault();

//     for(let i = 0; i < userNumber.length; i++) {
//         const curNumber = parseint(userNumber[i].value);
//         array.push(curNumber)
//     }
    
//     console.log(array);

//     let x = 0;
//     const countNumber = [];

//     for(let i = 0; i < randomNumbers.length; i++) {
//         const curNumber2 = randomNumbers[i];
//         for(let y = 0; y < array.length; y++) {
//             const curNumber3 = array[y];
//             if(curNumber2 === curNumber3) {
//                 counter++;
//                 console.log(curNumber2, curNumber3);
//             }
//         }
//     }




// })
























