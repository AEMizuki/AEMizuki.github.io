const topic1button = document.querySelector("#topic1button");
const topic2button = document.querySelector("#topic2button");
const topic3button = document.querySelector("#topic3button");
const topic1 = document.querySelector("#culture");
const topic2 = document.querySelector("#synthesizer");
const topic3 = document.querySelector("#characters");
// Hide Only Topic Pages, Show Only Introduction
function hideTopicPages() {
    topic1.style.display = "none";
    topic2.style.display = "none";
    topic3.style.display = "none";
}

// Show when buttons are clicked
topic1button.addEventListener("click", function () {
    hideTopicPages();
    topic1.style.display = "block";
});
topic2button.addEventListener("click", function () {
    hideTopicPages();
    topic2.style.display = "block";
});
topic3button.addEventListener("click", function () {
    hideTopicPages();
    topic3.style.display = "block";
});
// Hide Topic Pages until button is pressed
hideTopicPages();

const hamburgerMenu = document.querySelector("#hamburgerMenu");
hamburgerMenu.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");
function toggleMenus() {
    if (menuItemsList.classList.contains("showMenu")) {
        hamburgerMenu.innerHTML = "Open Menu";
        menuItemsList.classList.remove("showMenu");
    } else {
        hamburgerMenu.innerHTML = "Close Menu";
        menuItemsList.classList.add("showMenu");
    }
}

/*setTimeout(function to call, delay in ms)*/

const mikuId = document.getElementById("mikuId");
function GetRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
function MoveMiku() {
    mikuId.style.left = GetRandom(-500, 500) + "px";
    mikuId.style.top = GetRandom(-500, 500) + "px";
}
let moveMikuItvId = setInterval(MoveMiku, 1000);

topic1button.addEventListener("click", function () {
    topic1button.classList.toggle("newState");
})

mikuId.addEventListener("click", function () {
    mikuId.classList.add("rotateAnim");
    setTimeout(function(){
        mikuId.classList.remove("rotateAnim")
    }, 5000)
})

// Calculator
const aField = document.querySelector("#aField");
const bField = document.querySelector("#bField");
const sumBox = document.querySelector("#sum-box");
const sumButton = document.querySelector("#sum");
sumButton.addEventListener("click", doSum);
function doSum() {
//.value is property to get data from input element
//parseInt to convert into number
let a = parseInt(aField.value);
let b = parseInt(bField.value);
let sum = a+b;
let difference = a-b;
let product = a*b;
sumBox.innerHTML = "Sum of "+a+" and "+b+" is " + sum +"<br>";
sumBox.innerHTML += "Miku has calculated the difference to be "+difference+"<br>";
sumBox.innerHTML += "Miku has calculated the product to be "+product+"<br>";
}