$(function() {

	// Navbar close on click //
	$(document).click(function (event) {
		var clickover = $(event.target);
		var $navbar = $(".navbar-collapse");               
		var _opened = $navbar.hasClass("in");
		if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
			$navbar.collapse('hide');
		}
	});

	// Slider //
	$('.our-clients-slider').slick({
		infinite: false,
		slidesToShow: 7,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					infinite: false,
					slidesToShow: 6
				}
			},
			{
				breakpoint: 992,
				settings: {
					infinite: false,
					slidesToShow: 5
				}
			},
			{
			breakpoint: 768,
				settings: {
					infinite: false,
					slidesToShow: 3
				}
			}
		]
	});

});