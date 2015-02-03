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

}); // doc.ready