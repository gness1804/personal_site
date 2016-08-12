$(document).ready(function () {
  $(".dropdown-content").hide();
  $(".dd-show").hover(function () {
    $(".dropdown-content").fadeIn();
  });
  $(".dd-show").mouseleave(function () {
    $(".dropdown-content").fadeOut();
  })
}); //end of jQuery body
