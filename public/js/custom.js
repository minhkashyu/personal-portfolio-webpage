$(document).ready(function() {
    mtScroll('mt-home');
    mtScroll('mt-portfolio');
    mtScroll('mt-contact');
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });
});

var mtScroll = function (sectionID) {
    // animate the scroll when click on navbar
    $('a[href="#'+sectionID+'"]').click(function() {
        $('html, body').animate({
            scrollTop: $('#'+sectionID).offset().top - 60
        }, 1000);
    });
};