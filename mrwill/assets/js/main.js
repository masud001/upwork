$(document).ready(function () {
	// sub dropdown menu on hover
	// $(".dropdown-submenu").hover(
	// 	function () {
	// 		$(this).find(".submenu").stop(true, true).delay(200).fadeIn(500);
	// 	},
	// 	function () {
	// 		$(this).find(".submenu").stop(true, true).delay(200).fadeOut(500);
	// 	}
	// );

	// toggle class for desktop mobile search
	$(".desk_toggle_search").click(function () {
		$(".toggle-search-bar-area").toggleClass("show");
		$(".toggle-search-bar-area").toggleClass("hidden");
	});
});
