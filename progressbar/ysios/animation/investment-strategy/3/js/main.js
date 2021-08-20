$("#steps").on("click", ".step--active", function () {
	$(this).removeClass("step--incomplete").addClass("step--complete");
	$(this).removeClass("step--active").addClass("step--inactive");
	$(this).next().removeClass("step--inactive").addClass("step--active");
});

$("#steps").on("click", ".step--complete", function () {
	$(this).removeClass("step--complete").addClass("step--incomplete");
	$(this).removeClass("step--inactive").addClass("step--active");
	$(this)
		.nextAll()
		.removeClass("step--complete")
		.addClass("step--incomplete");
	$(this).nextAll().removeClass("step--active").addClass("step--inactive");
});

$(function () {
	var topPos =
		window.scrollY +
		document.querySelector(".steps").getBoundingClientRect().top; // Y
	console.log("steps position", topPos);

	$(window).scroll(function () {
		if ($(this).scrollTop() >= 800) {
			var lis = $(".steps > li"),
				currentHighlight = -1;
			N = 0.5; //interval in seconds
			let animate = setInterval(function () {
				currentHighlight = (currentHighlight + 1) % lis.length;
				console.log(currentHighlight);
				lis.removeClass("step--incomplete")
					.eq(currentHighlight)
					.addClass("step--complete");
			}, N * 1000);

			// console.log(lis);
			if (lis == 4) {
				clearInterval(animate);
				// console.log("end");
				return;
			}
		}
	});

	// animate();
});
