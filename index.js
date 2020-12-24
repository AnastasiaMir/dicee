var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImageSource = "dice" + randomNumber1 + ".png";
document.querySelectorAll(".img1")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 ="dice" + randomNumber2 + ".png";
document.querySelectorAll(".img2")[0].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {document.querySelector("h1").innerHTML= "🚩 Play 1 Wins!";}
  else if (randomNumber1 < randomNumber2) {document.querySelector("h1").innerHTML= "Play 2 Wins! 🚩";}
  else {document.querySelector("h1").innerHTML= "Draw!";}
