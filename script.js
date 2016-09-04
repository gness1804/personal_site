$(document).ready(function () {
  $(".dropdown-content").hide();
  $(".dd-show").hover(function () {
    $(".dropdown-content").fadeIn();
  });
  $(".dd-show").mouseleave(function () {
    $(".dropdown-content").fadeOut();
  });
  $(document).on("keydown", function(key) {
    if (key.which === 66) { // "B"
      $(".testing").toggleClass("border-test");
      }
    });
}); //end of jQuery body
