/** Draw rectangles */
window.addEventListener('load', drawRectangles);

function drawRectangles()
{
	var canvas=document.getElementById('myCanvas');
	var context=canvas.getContext('2d');

	for (var i=0; i<100; i++)
	{
		var x = canvas.width*Math.random();
		var y = canvas.height*Math.random();
		var width = canvas.width*Math.random();
		var height = canvas.height*Math.random();
		context.strokeRect(x, y, width, height);
		var color = random_rgb();
		context.strokeStyle = color;
	}

}

function random_rgb()
{
	var o = Math.round, r = Math.random, s = 255;
	return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

/** Topnav function */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

/** University years function */
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

/** University units function */
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

/** Hobbies image galerry function */
var slideIndex = [1,1,1];
var slideId = ["sportSlides", "musicSlides", "travelSlides"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}