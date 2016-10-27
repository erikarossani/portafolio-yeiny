;(function () {
	
	"use strict";



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	var burgerMenu = function() {

		$('.js-fh5co-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#fh5co-main-nav > .js-fh5co-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#fh5co-main-nav > .js-fh5co-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};


	$(function(){
		fullHeight();
		burgerMenu();

	});

	$(function() {
		
		$( '#ri-grid' ).gridrotator( {
			rows : 3,
			// number of columns 
			columns : 6,
			w1024 : { rows : 3, columns : 5 },
			w768 : {rows : 3,columns : 4 },
			w480 : {rows : 3,columns : 3 },
			w320 : {rows : 2,columns : 2 },
			w240 : {rows : 1,columns : 1 },
			preventClick : false
		});
		
	});



}());