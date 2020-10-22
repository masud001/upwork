$(document).ready(function () {
	$(".slider-section").owlCarousel({
		loop: true,
		autoplay: false,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
				dots: true,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
	$(".hero-carousel.owl-carousel").owlCarousel({
		loop: true,
		autoplay: false,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
	$("a.arrow_nav").click(function () {
		$(this).toggleClass("rotate");

		$(".main-menu ul").toggleClass("show");
		return false;
	});

	$(".app-carousel.owl-carousel").owlCarousel({
		loop: true,
		autoplay: false,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	// Tab Active tick
	$(".price_list__button .btn").click(function () {
		$(this).addClass("active-tab").siblings().removeClass("active-tab");
	});

	// New Whoop Slider
	$(".whoop_new_slider_2").owlCarousel({
		loop: true,
		autoplay: false,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: true,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
});

// Detect request animation frame
var scroll =
	window.requestAnimationFrame ||
	// IE Fallback
	function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
	elementsToShow.forEach(function (element) {
		if (isElementInViewport(element)) {
			element.classList.add("is-visible");
		} else {
			element.classList.remove("is-visible");
		}
	});

	scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
	// special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}
	var rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <=
				(window.innerHeight ||
					document.documentElement.clientHeight)) ||
		(rect.top >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight))
	);
}

$(document).ready(function () {
	/*
	$(".counter__btn").each(function () {
		var $this = $(this);
		$({ Counter: 0010 }).animate(
			{ Counter: $this.text() },

			{
				duration: 5000,
				easing: "swing",
				step: function () {
					// for single number
					$this.text(Math.ceil(this.Counter));
					// for decimal number
					$this.text(this.Counter.toFixed(2));
				},
				backgroundColor: "#400101",
			}
		);
	});
 */
});
