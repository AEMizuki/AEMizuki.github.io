//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
function hideall() { //function to hide all pages
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    hideall(); //we don't know which page is shown, so hideall
    page1.style.display = "block";
});
page2btn.addEventListener("click", function () {
    hideall(); //we don't know which page is shown, so hideall
    page2.style.display = "block";
});
page3btn.addEventListener("click", function () {
    hideall(); //we don't know which page is shown, so hideall
    page3.style.display = "block";
});
hideall(); //call hideall function to hide all pages

const hamBtn = document.querySelector("#hamIcon");
//connect hamBtn click to toggleMenus function
hamBtn.addEventListener("click", toggleMenus);
//get the menuItem list
const menuItemsList = document.querySelector("nav ul");
/*toggle, just like light switch, off becomes on, on becomes off*/
/*if menu is shown, hide it, if hidden, show it*/
function toggleMenus() {
    //if menuItemsList dont have the class "menuShow", add the class, else remove class
    if (menuItemsList.classList.contains("menuShow")) {
        hamBtn.innerHTML = "Open Menu"; //change button text to chose menu
        menuItemsList.classList.remove("menuShow");
    } else { //if menu NOT showing
        hamBtn.innerHTML = "Close Menu"; //change button text open menu
        menuItemsList.classList.add("menuShow");
    }
}

const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const resetBtn = document.querySelector("#resetBtn");
const ball = document.querySelector("#ball");
var ballX = ballY = 0; //assign initial position of ball
function ResetPos() {
    ballX = ballY = 0; //reset to zero
    ball.style.left = ballX + "px"; //set left property to ball x variable
    ball.style.top = ballY + "px"; //set top property to ball x variable
    ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
}
function MovePos(leftInc, topInc) {
    ballX = ballX + leftInc;
    ballY = ballY + topInc;
    ball.style.left = ballX + "px"; //set left css property to ball x variable
    ball.style.top = ballY + "px"; //set top css property to ball y variable
    ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
}


function MoveLeft() {
    ballX = ballX - 10; //decrement by 10
    ballY = ballY + 0; //no change
    ball.style.left = ballX + "px"; //set left css property to ball x variable
    ball.style.top = ballY + "px"; //set top css property to ball y variable
    ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
}
//eventlistener to activate MoveLeft (named callback function)
leftBtn.addEventListener("click", MoveLeft); //no brackets after MoveLeft
//eventListener to anonymous callback function (other way)
rightBtn.addEventListener("click", function () {
    MovePos(10, 0);
});
upBtn.addEventListener("click", function () {
    MovePos(0, -10);
});
downBtn.addEventListener("click", function () {
    MovePos(0, 10);
});
resetBtn.addEventListener("click", ResetPos);
