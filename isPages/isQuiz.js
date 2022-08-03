$('.is1A').on('click', question1A);
$('.is1B').on('click', question1B);
$('.is1C').on('click', question1C);

function question1A() {
  $(".is1A").css("background-color", "#900C3F");
  $(".is1A").css("color", "white");
}
function question1B() {
  $(".is1B").css("background-color", "#C3F2BA");
}
function question1C() {
  $(".is1C").css("background-color", "#900C3F");
  $(".is1C").css("color", "white");
}

$('.is2A').on('click', question2A);
$('.is2B').on('click', question2B);
$('.is2C').on('click', question2C);

function question2A() {
  $(".is2A").css("background-color", "#C3F2BA");
}
function question2B() {
  $(".is2B").css("background-color", "#C3F2BA");
}
function question2C() {
  $(".is2C").css("background-color", "#C3F2BA");
}

$('.is3A').on('click', question3A);
$('.is3B').on('click', question3B);
$('.is3C').on('click', question3C);

function question3A() {
  $(".is3A").css("background-color", "#900C3F");
  $(".is3A").css("color", "white");
}
function question3B() {
  $(".is3B").css("background-color", "#900C3F");
  $(".is3B").css("color", "white");
}
function question3C() {
  $(".is3C").css("background-color", "#C3F2BA");
}
function responsiveNavIS1() {
  var n = document.getElementById("navIS1");
  if (n.className === "navBar") {
    n.className += " responsive";
  } else {
    n.className = "navBar";
  }
}