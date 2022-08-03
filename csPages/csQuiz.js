$('.cs1A').on('click', question1A);
$('.cs1B').on('click', question1B);
$('.cs1C').on('click', question1C);

function question1A() {
  $(".cs1A").css("background-color", "#C3F2BA");
}
function question1B() {
  $(".cs1B").css("background-color", "#900C3F");
  $(".cs1B").css("color", "white");
}
function question1C() {
  $(".cs1C").css("background-color", "#900C3F");
  $(".cs1C").css("color", "white");
}

$('.cs2A').on('click', question2A);
$('.cs2B').on('click', question2B);
$('.cs2C').on('click', question2C);

function question2A() {
  $(".cs2A").css("background-color", "#900C3F");
  $(".cs2A").css("color", "white");
}
function question2B() {
  $(".cs2B").css("background-color", "#900C3F");
  $(".cs2B").css("color", "white");
}
function question2C() {
  $(".cs2C").css("background-color", "#C3F2BA");
}

$('.cs3A').on('click', question3A);
$('.cs3B').on('click', question3B);
$('.cs3C').on('click', question3C);

function question3A() {
  $(".cs3A").css("background-color", "#C3F2BA");
}
function question3B() {
  $(".cs3B").css("background-color", "#900C3F");
  $(".cs3B").css("color", "white");
}
function question3C() {
  $(".cs3C").css("background-color", "#C3F2BA");
}
function responsiveNavCS2() {
  var s = document.getElementById("navCS2");
  if (s.className === "navBar") {
    s.className += " responsive";
  } else {
    s.className = "navBar";
  }
}