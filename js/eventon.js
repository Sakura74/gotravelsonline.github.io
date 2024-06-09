/*
Author       : Templatehouse_net
Template Name: Venue Planner
Version      : 1.0
*/


"use strict";
$( document ).ready(function() {


// Fakes the loading setting a timeout
   setTimeout(function() {
     $('body').addClass('loaded');
   }, 1000);


/*======== Intro typer ===========*/
var element = $(".element");
  $(function() {
	  element.typed({
	  strings: ["Event Template.", "Conference Template."],
	  typeSpeed: 200,
	  loop: true,
	  });
});

/* Fun Fact
============================================== */
$(".number-counters").appear(function() {
	$(".number-counters [data-to]").each(function() {
		var e = $(this).attr("data-to");
		$(this).delay(6e3).countTo({
		from: 1,
		to: e,
		speed: 3000,
		refreshInterval: 50
		})
	})
});


//------------coundown timer-------------
$(".countDown").downCount({
	date: '01/01/2020 12:00:00', //month/date/year   HH:MM:SS
	offset: +6 //+GMT
});



//--------------------team page carousel---------------------
$("#sponsor-section .owl-carousel").owlCarousel({
			items: 5,
			loop: true,
			dots: false,
			nav: false,
			margin: 30,
			stagePadding: 25,
			autoplay: true,
			smartSpeed: 1200,
			responsiveClass: true,
			responsive: {
			0: {
			items: 1,
			nav: true
			},
			480: {
			items: 2,
			},
			768: {
			items: 3
			},
			992: {
			items: 5
		}
	}
});	


//--------------------team page carousel---------------------
$("#sponsorsectionBanner .owl-carousel").owlCarousel({
			items: 4,
			loop: true,
			dots: false,
			nav: false,
			margin: 30,
			stagePadding: 25,
			autoplay: true,
			smartSpeed: 1200,
			responsiveClass: true,
			responsive: {
			0: {
			items: 1,
			nav: true
			},
			480: {
			items: 2,
			},
			768: {
			items: 3
			},
			992: {
			items: 6
		}
	}
});	

//--------------------team page carousel---------------------
$("#speakers .owl-carousel").owlCarousel({
			items: 4,
			loop: true,
			dots: false,
			nav: false,
			margin: 30,
			stagePadding: 25,
			autoplay: true,
			smartSpeed: 1200,
			responsiveClass: true,
			responsive: {
			0: {
			items: 1,
			nav: true
			},
			480: {
			items: 2,
			},
			768: {
			items: 3
			},
			992: {
			items: 4
		}
	}
});	

//--------------------team page carousel---------------------
$("#testimonial-slider").owlCarousel({
			items: 2,
			loop: true,
			dots: false,
			nav: false,
			margin: 50,
			stagePadding: 25,
			autoplay: true,
			smartSpeed: 1200,
			responsiveClass: true,
			responsive: {
			0: {
			items: 1,
			nav: true
			},
			480: {
			items: 1,
			},
			768: {
			items: 2
			},
			992: {
			items: 2
		}
	}
});	

/*=========================================================================
	testimonial Slider
=========================================================================*/
$(".testimonialSec2 #testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:false
    });


/*=========================================================================
	Main Slider
=========================================================================*/
	$('#main-slider').owlCarousel({
        loop:true,
        autoplay: true,
        smartSpeed: 500,
		dots: false,
        items: 1,
        nav:true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    $("#main-slider").on("translate.owl.carousel", function(){
        $(".main_slide .slider_content").removeClass("animated fadeInLeft").css("opacity", "0");
    });
    
    $("#main-slider").on("translated.owl.carousel", function(){
        $(".main_slide .slider_content").addClass("animated fadeInLeft").css("opacity", "1");
    });	

//--------------------Popup Images and Video---------------------

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});

//--------------------Popup Images---------------------

$('a.gallery_img').magnificPopup({
	type: 'image',
	closeBtnInside: false,
	closeOnContentClick: true,
	tLoading: '', // remove text from preloader
	/* don't add this part, it's just to disable cache on image and test loading indicator */
	callbacks: {
	beforeChange: function() {
	this.items[0].src = this.items[0].src + '?=' + Math.random(); 
	}
	}
});


//--------------------sticky menu---------------------

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	
  if (window.pageYOffset > 700) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//--------------------Menu Smoth Scroll---------------------

$(function(){
  $("#navC .dropdown").hover(
    function() {
      $('#dropmenu.dropdown-menu', this).stop( true, true ).fadeIn("fast");
      $(this).toggleClass('open');
    },
    function() {
      $('#dropmenu.dropdown-menu', this).stop( true, true ).fadeOut("fast");
      $(this).toggleClass('open');
    });
});


/*=========================================================================
	Initialize popover component
=========================================================================*/  
  
  
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$(function () {
  $('[data-toggle="popover"]').popover()
})

});







 
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
 
 
 
 