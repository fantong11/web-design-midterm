
/* navigation bar animation*/
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('header');
    var Heightofit = startchange.outerHeight();
    $(window).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > Heightofit) {
            $('header').css('background-color', 'rgba(255, 255, 255, 0.9)');
        }
    });
});