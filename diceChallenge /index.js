/*Javascript File*/

//Generate Random #
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
/*test out function console.log(randomNumber1);*/

//Find the <img> element on the left side of the page and set src to a random dice image 
var diceImage1 = document.querySelector(".img2");
diceImage1.setAttribute("src", "./images/dice"+ randomNumber1 + ".png");

//Find the <img> element on the right side of the page 
var diceImage2 = document.querySelector(".img1");
diceImage2.setAttribute("src", "./images/dice"+ randomNumber2 + ".png");

//Select h1 element
var header = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
	header.innerHTML = "Player 1 Wins 🤸";
}
else if (randomNumber2 > randomNumber1){
	header.innerHTML = "Player 2 Wins 🤾";
}
else {
	header.innerHTML = "Draw! Refresh 🧘";
}
