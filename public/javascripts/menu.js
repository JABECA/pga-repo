$(document).ready(main);  /*ejecuatr hasta que este todo cargado*/

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		}else{
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

	//mostramos y ocultamos submenus
	$('.submenu').click(function(event) {
		$(this).children('.children').slideToggle();
	});
};

$(function () {
	$("#slider").excoloSlider({
		height: 295,
	    mouseNav: true,
	    touchNav: true,
		interval: 5000, // = 5 seconds
	    playReverse: true
  	});
});
		