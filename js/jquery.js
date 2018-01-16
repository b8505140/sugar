$(document).ready(function(){
	$('.navbar-toggler').click(function(){
		$(this).toggleClass('open');
	});
});

$('.carousel').carousel({
	pause:"hover"
})

$('.nav-link').click(function(){
	$('html,body').animate({scrolltop:$('#Welcome').offset().top},800)
});
