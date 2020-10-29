$(document).ready(function () {
	var menu_btn = $(".menu_btn");
	var side__menu_section = $(".side__menu_section");
	// Burger menu
	menu_btn.click(function () {
		side__menu_section.toggleClass("active");
		menu_btn.toggleClass("active");
	});
});
