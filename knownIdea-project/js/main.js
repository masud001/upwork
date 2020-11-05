$(document).ready(function () {
	var menu_btn = $(".menu_btn");
	var close__btn = $(".close__btn");
	var side__menu_section = $(".side__menu_section");
	// Burger menu
	menu_btn.click(function () {
		side__menu_section.toggleClass("active");
		menu_btn.toggleClass("active");
	});
	close__btn.click(function () {
		side__menu_section.removeClass("active");
	});

	$(".hero__slider").owlCarousel({
		loop: true,
		rtl: false,
		margin: 10,
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 1,
				nav: false,
			},
			1000: {
				items: 1,
				nav: false,
				loop: false,
			},
		},
	});
});
