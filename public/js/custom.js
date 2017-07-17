$(document).ready(function() {
    'use strict';
    mtScroll('mt-home');
    mtScroll('mt-portfolio');
    mtScroll('mt-contact');
});

var mtScroll = function (sectionID) {
    // animate the scroll when click on navbar
    $('a[href="#'+sectionID+'"]').click(function() {
        $('html, body').animate({
            scrollTop: $('#'+sectionID).offset().top - 68
        }, 1000);
        return false;
    });
};