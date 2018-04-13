// Cuando el menu collapse toca porder el id handelbay-background-prueba-gratis
// Para que sea mejor
var cont = 0;
$('.navbar-toggle').on("click", function() {            
    if (cont == 0) {
        $('header').attr('id', 'handelbay-background-prueba-gratis'); 
        cont = 1; 
    } else {
        var scroll = $(window).scrollTop();
        var mundo = $('.section-top-contend').height() - 100;
        if (scroll >= mundo) {
            $('header').attr('id', 'handelbay-background-prueba-gratis'); 
        } else {
            setTimeout(function(){ 
                $('header').attr('id', 'handelbay-bacground-none');                         
            }, 220);
        } 
        cont = 0;                               
    }            
            
}) 

$(document).ready(function() { 
    // Scroll menu cuando se pasa del div .section-top-contend se agrega el id 
    // handelbay-background-prueba-gratis
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var mundo = $('.section-top-contend').height() -100;
        if (scroll >= mundo) {
            $('header').attr('id', 'handelbay-background-prueba-gratis');
        } else {
            if ($('header .navbar-collapse').hasClass('in')) {
                $('header').attr('id', 'handelbay-background-prueba-gratis');
            } else {
                $('header').attr('id', 'handelbay-bacground-none');
            }                    
        }
    });                      
});