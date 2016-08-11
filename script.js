$(document).ready(function () {
  $(".dropdown-content").hide();
  $(".dropdown").hover(function () {
    $(".dropdown-content").fadeIn();
  });
  $(".dropdown").mouseleave(function () {
    $(".dropdown-content").fadeOut();
  })
}); //end of jQuery body
