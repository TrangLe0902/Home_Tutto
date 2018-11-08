$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		responsive: {
			600:{
				dots: true,
				nav: false,
			}
		}
	});
});
$(document).ready(function(){
	$('.list-service.owl-carousel').owlCarousel({
		items: 1,
	});
});
