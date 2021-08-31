$(document).ready(function () {
	$('.testimonials-slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	$('.blog-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
	});
});
