// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.addEventListener("scroll", function(){
			var header = document.querySelector("nav");
			header.classList.toggle("sticky",window.scrollY > 0);
		})

window.onscroll = function() {scrollFunction()};

//----------------------------------------------------------------------------------------------------------------------
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}