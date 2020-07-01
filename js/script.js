$(document).ready(function () {
    $('.hamburg-menu').on('click', function () {
        $('.animated-hamburg').toggleClass('open');
    });
});

// /* navigation bar animation*/
// $(document).ready(function () {
//     var scroll_start = 0;
//     var startchange = $('header');
//     var Heightofit = startchange.outerHeight();
//     $(window).scroll(function () {
//         scroll_start = $(this).scrollTop();
//         if (scroll_start > Heightofit) {
//             $('header').css('background-color', '#ffffff');
//             $('header').css('-webkit-box-shadow', '0 8px 6px -6px #999');
//             $('header').css('-moz-box-shadow', '0 8px 6px -6px #999');
//             $('header').css('box-shadow', '0 8px 6px -6px #999');
//         } else {
//             $('header').css('background-color', 'transparent');
//             $('header').css('-webkit-box-shadow', '');
//             $('header').css('-moz-box-shadow', '');
//             $('header').css('box-shadow', '');
//         }
//     });
// });

// /*當滑鼠放上選單時會變顏色*/
// $(".button").hover(function () {
//     // 滑鼠在上面的時候
//     $(this).css("background", "rgb(243, 107, 72)");
// },
//     function () {
//         // 滑鼠不在上面的時候
//         $(this).css("background", "#F4A460");
//     }
// );

