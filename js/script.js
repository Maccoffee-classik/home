$(document).ready(function(){
	$('.slider').slick({

		slidesToShow:4,
		autoplay: true,
		
		responsive: [
			{ 
				
				breakpoint: 1240,
				settings: {
					slidesToShow:3

				}
				},{
				
				
				breakpoint: 992,
				settings: {
					slidesToShow:2


				}
				},{


				breakpoint: 768,
				settings: {
					slidesToShow:1


				}
			
			}





		]

	});


});