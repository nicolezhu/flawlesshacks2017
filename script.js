var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var sadImages = ["images/sad1.gif", "images/sad2.gif", "images/sad3.gif", "images/sad4.gif", "images/sad5.gif"];
var happyImages = ["images/happy1.gif", "images/happy2.gif", "images/happy3.gif"];


var jumping = false;
if (!jumping) {
  var audio = new Audio('JumpinJumpin.mp3');
  audio.play();
  // It's 11:30pm and the club is jumping jumping.
  document.getElementById("flawless").innerHTML = "YES, THE CLUB IS JUMPIN' JUMPIN'";
  var pic = happyImages[parseInt(Math.random() * happyImages.length)];
  document.getElementsByTagName("BODY")[0].style.backgroundImage = "url(" + pic + ")";
}
else {
  var audio = new Audio('loveme.mp3');
  audio.play();
  var pic = sadImages[parseInt(Math.random()*sadImages.length)];
  document.getElementsByTagName("BODY")[0].style.backgroundImage = "url(" + pic + ")";
  // Not 11:30 so the club is not jumping
}
