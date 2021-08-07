"use strict";
function func() {
  document.querySelector("#button").addEventListener("click", function () {
    var x = document.getElementById("sec-text").textContent;
    document.getElementById("pri-text").innerHTML = x;
  });
}
func();
document.querySelector("#link").addEventListener("mouseover", function () {
  document.getElementById("third-nav").style.display = "block";
  document.getElementById("fourth-nav").style.display = "block";
});

document.querySelector("#link").addEventListener("click", function () {
  document.getElementById("third-nav").style.display = "block";
  document.getElementById("fourth-nav").style.display = "block";
  // x = document.getElementById("third-nav").style.display;
});
var x = "block";
if (x == "block") {
  document.querySelector("#link").addEventListener("click", function () {
    document.getElementById("third-nav").style.display = "none";
    document.getElementById("fourth-nav").style.display = "none";
  });
}
var slidebut = new Array();
slidebut[0] = new Image();
slidebut[0].src = "photo1.jpg";
slidebut[1] = new Image();
slidebut[1].src = "photo2.jpg";
slidebut[2] = new Image();
slidebut[2].src = "photo3.jpg";
slidebut[3] = new Image();
slidebut[3].src = "photo4.jpg";
slidebut[4] = new Image();
slidebut[4].src = "photo5.jpg";
var x = 1;
document.querySelector("#but").addEventListener("click", function () {
  function getloop() {
    document.getElementById("button-switch").src = slidebut[x - 1].src;
    x++;
    if (x > 5) {
      x = 1;
    }
  }
  getloop();
});

//variable that will increment through the images
var step = 0;

function slideit() {
  //if browser does not support the image object, exit.
  if (!document.images) return;
  document.getElementById("slide").src = slideimages[step].src;
  if (step < 3) step++;
  else step = 0;
  //call function "slideit()" every 2.5 seconds
  setTimeout("slideit()", 2500);
}

slideit();
document.querySelector("#up-hover").addEventListener("mouseover", function () {
  document.getElementById("down-hov").style.display = "block";
});
document.querySelector("#up-hover").addEventListener("click", function () {
  document.getElementById("down-hov").style.display = "none";
});
function validate() {
  if (document.myform.type.value == " ") {
    alert("Please Provide your name:");
    document.myform.type.focus();
    return false;
  }
  if (document.myform.type2.value == "") {
    alert("Please provide your email:");
    document.myform.type2.value.focus();
    return false;
  }
}
