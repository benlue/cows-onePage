ctrl.startup = function()  {
    var  headerHeight = ctrl.sel('nav.navbar').outerHeight();
    
    ctrl.sel('header.docSection').css('padding-top', headerHeight + 'px');
    
    $('#page-top').on('click', '.sec-scroll a', function(event) {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: ctrl.sel($anchor.attr('href')).offset().top - headerHeight
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });
}