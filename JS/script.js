$(document).ready(function() {
    var btnMenu = $('#btnMenu');
    var menu = $('#menu');
    var triangulo = $('#triangulo');
    
    
    
    btnMenu.on('click', function(e){
        e.preventDefault();
        // menu.toggleClass('show');
        // triangulo.toggleClass('show');
        triangulo.fadeToggle(499);
        menu.slideToggle(500);
    })

})