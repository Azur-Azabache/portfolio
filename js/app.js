$(document).ready(function() {
var item;
var hideTime = 1000;
var showTime = 1000;

$(document).ready(function($) {

	// Cambiar sección
	$("a", '.mainmenu').click(function(){
		if( ! $(this).hasClass('active') ) {
			item = this;
			// Desaparecer todas las secciones con efecto fade
			$('.section:visible').fadeOut( hideTime, function() {
				$('a', '.mainmenu').removeClass( 'active' );
				$(item).addClass( 'active' );
				// Añadir seccion elegida
				var newSection = $( $(item).attr('href') );
				newSection.fadeIn( showTime );
			} );
		}
	});
});
});
