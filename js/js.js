window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
  }




  function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  
  window.onscroll = function () {
    progressBarScroll();
  };


  //Get the button:
mybutton = document.getElementById("myBtn");

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
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



$(window).load(function() {
  $(".loader").fadeOut("slow");
});


'use strict'
// amount of images in the slider :
var amountImg = 7;
// width of one image (in pixels)
var widthImg = 570;
// waiting interval (in milliseconds)
var waitTime = 4000;


var deltaX = 0;
var slider = document.getElementById('my-slider');

 window.setInterval(doSlide, waitTime);

function doSlide() {
	deltaX += widthImg;
	deltaX %= amountImg*widthImg;
	console.log(deltaX);
	slider.querySelector('#my-slider-inner').style.marginLeft = '-' + deltaX + 'px';
}






