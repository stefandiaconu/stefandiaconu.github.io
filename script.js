function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

var y1 = document.getElementById("yearone")
var y2 = document.getElementById("yeartwo")
var y3 = document.getElementById("yearthree")

function year1Function() {
  var x = document.getElementById("firstyear");

  if (x.className === "firstyear1") {
    console.log("Hello, Year 1!");
    if (y1.className === "yearone1") {
      y1.style.display = "block";
      y2.style.display = "none";
      y3.style.display = "none";
    }
  }
}

function year2Function() {
  var x = document.getElementById("secondyear");

  if (x.className === "secondyear2") {
    console.log("Hello, Year 2!");
    if (y2.className === "yeartwo2") {
      y1.style.display = "none";
      y2.style.display = "block";
      y3.style.display = "none";
    }
  }
}

function year3Function() {
  var x = document.getElementById("thirdyear");

  if (x.className === "thirdyear3") {
    console.log("Hello, Year 3!");
    if (y3.className === "yearthree3") {
      y1.style.display = "none";
      y2.style.display = "none";
      y3.style.display = "block";
    }
  }
}