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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// ---------------------//
// Create an image galerry
//----------------------//

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}