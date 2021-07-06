
var randNum1 = Math.floor(Math.random() * 6) + 1;

var randNum2 = Math.floor(Math.random() * 6) + 1;

if (randNum1 > randNum2)
{
  document.querySelector("h1").innerText = "🚩Player 1 wins";
}
else if (randNum1 < randNum2)
{
  document.querySelector("h1").innerText = "Player 2 wins🚩";
}
else
{
  document.querySelector("h1").innerText = "🚩Draw🚩";
}

document.getElementsByTagName("img")[0].setAttribute("src", "css/images/dice" + randNum1 + ".png");

document.getElementsByTagName("img")[1].setAttribute("src", "css/images/dice" + randNum2 + ".png");
