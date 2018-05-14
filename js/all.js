$(document).ready(function() {

//下拉式選單
 $('.dropdown-list').click(function() {
   event.preventDefault();
  $(this).siblings().slideToggle()
	});
 $('.dropdown-list-open').mouseleave(function() {
   event.preventDefault();
   $(this).slideUp()
	});

//nivo slider
$(window).on('load', function() {
    $('#slider').nivoSlider({ 
    effect: 'fade',                 // Specify sets like: 'fold,fade,sliceDown' 
    slices: 15,                       // For slice animations 
    boxCols: 8,                       // For box animations 
    boxRows: 4,                       // For box animations 
    animSpeed: 300,                   // Slide transition speed 
    pauseTime: 2500,                  // How long each slide will show 
    startSlide: 0,                    // Set starting Slide (0 index) 
    directionNav: false,               // Next & Prev navigation 
    controlNav: false,                 // 1,2,3... navigation 
    controlNavThumbs: false,          // Use thumbnails for Control Nav 
    pauseOnHover: false,               // Stop animation while hovering 
    manualAdvance: false,             // Force manual transitions 
    prevText: 'Prev',                 // Prev directionNav text 
    nextText: 'Next',                 // Next directionNav text 
    randomStart: false,               // Start on a random slide           // Triggers when slider has loaded 
  }); 
 });

 //lightbox setting
 lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
 });

 //top按鈕
 $('.top-btn a').click(function(event) {
 	/* Act on the event */
 	  event.preventDefault();
 	$('html,body').animate({
 	scrollTop: 0
 	}, 1000)
 });

//animatedCSS

//banner h2
$('.banner h2').addClass('animated bounceInRight');
//form-title
$('.contact').mouseenter(function() {
   event.preventDefault();
   $('.form-title').addClass('animated pulse');
	});
//table hightlight
$('.comparison').mouseenter(function() {
   event.preventDefault();
   $('.hex-hl').addClass('animated flash');
	});



});







