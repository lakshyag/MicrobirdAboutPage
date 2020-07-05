function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
          document.querySelector('.toggleBtnNav').style.color = "black";
          document.querySelector('.logo-image').style.filter = "none";
    }

    else {
          $('nav').removeClass('black');
          document.querySelector('.toggleBtnNav').style.color = "white";
          document.querySelector('.logo-image').style.filter = "invert(1)";
    }
})