$(document).foundation();
$(document).ready(function() {

// trigger for the main menu mobile
$('.js-menu-trigger').click(function() {
	$('.b-main-menu').toggleClass('m-active');
});


// rotating news
$('.js-news-wrapper > h5:gt(0)').hide();

setInterval(function() {
	$('.js-news-wrapper > h5:first').fadeOut(1000, function() {
		$(this).next().fadeIn(1000);
		$(this).appendTo('.js-news-wrapper');
	});
}, 6000);




// Products Slider - http://unslider.com/
var slider = $('.b-slider').unslider({
	keys: false,
	dots: false,
	fluid: true
});

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
