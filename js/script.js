window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("head-title");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//-------------------------------------------------------------------------------------------------------//

function animate_bg(ele, from, to) {
    ele.css("background-color", "rgba(187, 93, 0, " + (from += from > to ? -1 : 1) / 10 + ")"); 
    if(from != to)  
        setTimeout(function() { animate_bg(ele, from, to) }, 20);
}

// $("header").hover(
//     function() {return animate_bg($(header), 0, 10)},
//     function() {return animate_bg($(header), 10, 0)}
// );
$(document).scroll(function() { 
    if($(window).scrollTop() != 0) {
        //animate_bg($('header'), 0, 10)
        animate_bg($('header'), 10, 0)
    }
    // else {
    //     animate_bg($('header'), 10, 0)
    // }
 });
