$(document).ready(function () {
  $(".websites").hover(function () {
    $(".dropdown-menu").addClass("dropdown-menu-show");
    setTimeout(function() {
      $(".dropdown-menu").removeClass("dropdown-menu-show");
    }, 5000);
  })
}); //end of jQuery body
