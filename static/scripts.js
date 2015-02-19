$(document).foundation();
$(document).ready(function() {
		
// trigger for the main menu mobile
$('.js-menu-trigger').click(function() {
	$('.b-main-menu').toggleClass('m-active');
});


// rotating news
$(".js-news-wrapper > h5:gt(0)").hide();

setInterval(function() { 
  $('.js-news-wrapper > h5:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.js-news-wrapper');
},  6000);




// Products Slider - http://unslider.com/ 
var slider = $('.b-slider').unslider({
	speed: 500,               //  The speed to animate each slide (in milliseconds)
	delay: 3000,              //  The delay between slide animations (in milliseconds)
	// complete: function() {},  //  A function that gets called after every slide animation
	// keys: true,               //  Enable keyboard (left, right) arrow shortcuts
	// dots: true,               //  Display dot navigation
	fluid: false              //  Support responsive design. May break non-responsive designs
});

var data = slider.data('unslider');

slider.hover(
	function() {
		//  Pause Unslider
		data.stop();
		console.log("Stopped");	
	}, function() {
		//  Start Unslider
		data.start();
		console.log("Moving Again");	
	}
);

// Smooth Scrolling Function
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
			}
		}
	});
});




}); // doc.ready