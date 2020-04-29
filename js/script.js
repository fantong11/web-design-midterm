$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('header');
    var Heightofit = startchange.outerHeight();
    $(window).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > Heightofit) {
                $('header').css('background-color','#ffffff');
        } else {
             $('header').css('background-color','transparent');
        }
    });
 });

// /*當滑鼠放上選單時會變顏色*/
// $(".nav-list-item-link").hover(function () {
//     // 滑鼠在上面的時候
//     $(this).css("background", "#d19b05");
// },
// function() {
//     // 滑鼠不在上面的時候
//     $(this).css("background", "#e7ab06");
// });
