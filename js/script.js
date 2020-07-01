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
var firebaseConfig = {
    apiKey: "AIzaSyAACLLt9eEszfIvHi_c28xE7-2ehhgpU-k",
    authDomain: "finalwebproject-b660e.firebaseapp.com",
    databaseURL: "https://finalwebproject-b660e.firebaseio.com",
    projectId: "finalwebproject-b660e",
    storageBucket: "finalwebproject-b660e.appspot.com",
    messagingSenderId: "455956884478",
    appId: "1:455956884478:web:cd0cdf4fc3fad5ebddeeaf",
    measurementId: "G-CGF508ZT1C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  function processFormData() {
    const nameElement = document.getElementById("name");
    const name = nameElement.value;
    const questionElement = document.getElementById("question");
    const question = questionElement.value;
    const contentElement = document.getElementById("content");
    const content = contentElement.value;
    db.collection("usr").doc(name).set({
        usr_name: name,
        ques: question,
        desctiption: content
    });
    document.getElementById("name").value="";
    document.getElementById("question").value="";
    document.getElementById("content").value="";
    alert("謝謝您的回饋，您的意見就是我們的動力");
    
  }
  


