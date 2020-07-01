
/* navigation bar animation*/
$(document).ready(function () {
    $('.hamburg-menu').on('click', function () {
        $('.animated-hamburg').toggleClass('open');
    });
});
$('#food_button').click(function() {
    if( $('.ingredients-box').is(':visible') == false){
        $('.ingredients-box').css('display','flex');
        $('#food_button').val('隱藏食材');
    }else{
        $('.ingredients-box').css('display','none');
        $('#food_button').val('顯示食材');
    }
})