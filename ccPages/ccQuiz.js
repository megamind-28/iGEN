// var ccResultsQ1 = $('.ccResultsQ1');
// var ccQ1Section = $('.ccQ1Section');
// $(document).ready(function(){
  // ccQ1Section.css("background-color", "green");
  // $('input[class="ccResultsQ1"]').click(function(){
  //   // var ccQ1 = $("input[name='ccQ1']:checked").val();
  //   // if (ccQ1 === "ccQ1A"){
  //   //   ccQ1.css("background-color", "green");
  //   //   ccResultsQ1.append(`<p>Correct</p>`);
  //   // } else{
  //   //   ccQ1.css("background-color", "red");
  //   //   ccResultsQ1.append(`<p>Incorrect</p>`);
  //   // };
  // });
// });
// $('#ccQ1A').on('click', ccQ1);
// function ccQ1()
// {
//   $("html, body").css("background-color", "0")
  
  
// }

$('.cc1A').on('click', question1A);
$('.cc1B').on('click', question1B);
$('.cc1C').on('click', question1C);

function question1A() {
  $(".cc1A").css("background-color", "#C3F2BA");
}
function question1B() {
  $(".cc1B").css("background-color", "#C3F2BA");
}
function question1C() {
  $(".cc1C").css("background-color", "#900C3F");
  $(".cc1C").css("color", "white");
}

$('.cc2A').on('click', question2A);
$('.cc2B').on('click', question2B);
$('.cc2C').on('click', question2C);

function question2A() {
  $(".cc2A").css("background-color", "#C3F2BA");
}
function question2B() {
  $(".cc2B").css("background-color", "#900C3F");
  $(".cc2B").css("color", "white");
}
function question2C() {
  $(".cc2C").css("background-color", "#C3F2BA");
}

$('.cc3A').on('click', question3A);
$('.cc3B').on('click', question3B);
$('.cc3C').on('click', question3C);

function question3A() {
  $(".cc3A").css("background-color", "#900C3F");
  $(".cc3A").css("color", "white");
}
function question3B() {
  $(".cc3B").css("background-color", "#900C3F");
  $(".cc3B").css("color", "white");
}
function question3C() {
  $(".cc3C").css("background-color", "#C3F2BA");
}

function responsiveNavCC1() {
  var h = document.getElementById("navCC1");
  if (h.className === "navBar") {
    h.className += " responsive";
  } else {
    h.className = "navBar";
  }
}
