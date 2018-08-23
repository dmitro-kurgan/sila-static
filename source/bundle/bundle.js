import '../components/scss/style.scss';

// import '../components/js/map';

import '../components/js/bootstrap.min';

import '../components/js/bootstrap-select';

import 'slick-carousel';

var slickBanner = $('.slick-banner');
var slickViewed = $('.slick-viewed');
var slickSales = $('.slick-sales');
var slickNew = $('.slick-new');
var slickDelivery = $('.slick-delivery');
var SlickFor = $(".slick-for");
var SlickNav = $(".slick-nav");

slickBanner.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	dots: true
});

slickViewed.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

slickSales.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

slickNew.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

slickDelivery.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

SlickFor.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	swipe: false,
	asNavFor: '.slick-nav',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				swipe: true,
				fade: false
			}
		}
	]
});

SlickNav.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slick-for',
	dots: false,
	arrows: false,
	vertical: true,
	verticalSwiping: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {

				// slidesToShow: 3
			}
		}
	]
});

$(function(){
	$('.input').mousedown(function(event){
	    event.stopPropagation();
	});

	$('.minus').mousedown(function(event){
	    event.stopPropagation();
	    event.preventDefault(); 
	    return false;
	});

	$('.plus').mousedown(function(event){
	    event.stopPropagation();
	    event.preventDefault(); 
	    return false;
	});
	
	$('.plus').on('click', function(){
		
		var _this = $(this);
		var input = _this.next();
		var value = input.val();
		input.val(+value+1);

	});
	$('.minus').on('click', function(){
		var _this = $(this);
		var input = _this.prev();
		var value = input.val()
		if(value>1) {
			input.val(+value-1);
		}
	});
});

import '../components/js/jquery.scrollbar.min';

jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});

require('webpack-jquery-ui');

$(function(){
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 25000,
		values: [ 3000, 15000 ],
		slide: function( event, ui ) {
			$( "#price" ).val(ui.values[ 0 ]);
			$( "#price2" ).val(ui.values[ 1 ]);
		}
	});
	$( "#price" ).val($( "#slider-range" ).slider( "values", 0 ));
	$( "#price2" ).val($( "#slider-range" ).slider( "values", 1 ) );
});

jQuery(document).ready(function(){
	var headerCart = $('#headerCart');
	var headerCartInner = $('#headerCartInner');
	function ShowCart() {
		headerCart.click(function() {
			headerCartInner.toggleClass('opened');
			$('.header-cart').toggleClass('opened');
			if(headerCartInner.hasClass('opened')) {
				$(document).mouseup(function (e) {
				    if(headerCartInner.has(e.target).length === 0){
				        headerCartInner.removeClass('opened')
				        $('.header-cart').removeClass('opened');
				    }
				});
			}
		});
	}
	ShowCart();
});

function ShowMenu() {
	$('#hamburger, #close').click(function() {
		// $('#hamburger').toggleClass('opened');
		$('#headerMenu').toggleClass('opened');
	});
}
ShowMenu();

function changeMobile() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 768px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		if(screen.matches) {
			$('.header-cart').appendTo('#headerMobCart');
		}
		else {
			$('.header-cart').appendTo('.header-main_right > ul > li:last-child');
		}
	};
};
changeMobile();

$(document).ready(function() {
	$('.ordering-top_delivery > ul > li > .radio').click(function() {
		$('.ordering-top_map').removeClass('opened');
	})
	$('#radioDelivery').click(function() {

		$('.ordering-top_map').addClass('opened');
	})

})

$('.header-bottom a').mouseover(function() {
	$('.slick-banner .slick-prev').css('z-index', '0');
});
$('.header-bottom a').mouseout(function() {
	$('.slick-banner .slick-prev').css('z-index', '1');
});
// 
import ymaps from 'ymaps';

if(document.getElementById('map')) {
  ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {
    const map = new maps.Map('map', {
      center: [50.004472, 36.236309],
      zoom: 9,
      scroll: false
    });
    map.behaviors.disable('scrollZoom');
  })
  .catch(error => console.log('Failed to load Yandex Maps', error));
}