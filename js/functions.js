function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

// Agregar y no la clase active a los planes
$("#buyer-row .col-plan-handelbay-1").on("click", function () {
    $('#buyer-row .col-plan-handelbay-1').removeClass('active');
    $(this).addClass('active');
});

$("#provider-row .col-plan-handelbay-1").on("click", function () {
    $('#provider-row .col-plan-handelbay-1').removeClass('active');
    $(this).addClass('active');
});

// Fuction para mostrar el video y ocultarlo
function showEmbed(x){

    if (x == 0) {
        $('#optimize-time-video').show();
        $('#optimize-time').hide();
        $('.embed-optimize iframe').attr('src', 'https://www.youtube.com/embed/If5O5Q0zX_Y?rel=0&autoplay=1');
    } else {
        $('#optimize-time-video').hide();
        $('#optimize-time').show();
        $('.embed-optimize iframe').attr('src', 'https://www.youtube.com/embed/If5O5Q0zX_Y?rel=0&autoplay=0');
    }
}

//Submit del formulario agenda tu demo
function agendaDemo() {
    $('#excelente').show();
    $('#modal-demo').animate({ scrollTop: $('#excelente').offset().top }, 'slow');
}

function backagendaDemo() {
    $('#excelente').hide();
    $('#modal-demo').animate({ scrollTop: $('#agendatudemo').offset().top }, 'slow');
}


$(function () {
    //Activar el menu
    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
    // now grab every link from the navigation
    $('.handelbay-navbar-left a').each(function () {
        // and test its normalized href against the url pathname regexp
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).parent().addClass('active');
        }
    });
    // end activar menu

    // Para que los items cojan el mismo tamaño
    let arrayItems = [];
    $('.tecno-ignite').each(index => {
        arrayItems.push($('.tecno-ignite').eq(index).height());
    });    
    $('.tecno-ignite').css('min-height', (getMaxOfArray(arrayItems) + 25) + 'px');

    // Para que los planes cojan el mismo tamaño
    let arrayItemsPlan = [];
    $('.more').popover('toggle');
    $('.more').popover('hide');
    $('.col-plan-handelbay-1').each(index => {
        arrayItemsPlan.push($('.col-plan-handelbay-1').eq(index).height());
    });
    $('.col-plan-handelbay-1').css('min-height', (getMaxOfArray(arrayItemsPlan) + 35) + 'px');
    //Solo un activo checkbox
    // $('input[type="checkbox"]').on("click", function () {
    //     $('input[type="checkbox"]').each(index => {
    //         $('input[type="checkbox"]')[index].checked = false;
    //     });
    //     $(this)[0].checked = true;
    // });
    $('.btn-time').on("click", function () {
        $('.btn-time').each(index => {
            $('.btn-time').eq(index).removeClass('active');
        });
        $(this).addClass('active');
    });                       
});