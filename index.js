function genarateRandom()
{
  var n = Math.random();
  n = n*6 +1;
  n = Math.floor(n);
  return n;
}

var randomNumber1 = genarateRandom();
var randomIngSource1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomIngSource1);

var randomNumber2 = genarateRandom();
var randomIngSource2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomIngSource2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "🚩Player 1 win";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 win🚩";
}
else{
  document.querySelector("h1").innerHTML = "draw!";
}
