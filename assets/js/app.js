$(document).ready(function() {
  // When Scroll Body ... Navbar Sticky
  $(window).scroll(function() {
    var sc = $(this).scrollTop();

    if (sc >= 400) {
      $("._home-navbar").addClass("stcky");
    } else {
      $("._home-navbar").removeClass("stcky");
    }
  });

  // Start Ex Zoom
  // $(function() {
  //   $("#exzoom").exzoom({
  //     autoPlay: true
  //   });
  // });
  $("#ex1").zoom();

  // Same height for all div
  var maxHeight = 0;
  $(".same-height div").each(function() {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });

  $(".same-height div").height(maxHeight);

  // thumbnails
  var numberOfThumbnails = $(".thumbnails").children().length,
    marginBetweenThumbnails = ".5",
    totalMarginBetweenThumbnails =
      (numberOfThumbnails - 1) * marginBetweenThumbnails,
    widthThumbnails = (100 - totalMarginBetweenThumbnails) / numberOfThumbnails;

  $(".thumbnails img").css({
    width: widthThumbnails + "%",

    "margin-right": marginBetweenThumbnails + "%"
  });

  $(".thumbnails img").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");

    $(".master-image img")
      .hide()
      .attr("src", $(this).attr("src"))
      .fadeIn(200);
    $(".master-image img")
      .hide()
      .attr("id", $(this).attr("id"))
      .fadeIn();
  });

  $(".master-image .fa-chevron-circle-right").click(function() {
    if ($(".thumbnails .active").is(":last-child")) {
      $(".thumbnails img")
        .eq(0)
        .click();
    } else {
      $(".thumbnails .active")
        .next()
        .click();
    }
  });

  $(".master-image .fa-chevron-circle-left").click(function() {
    if ($(".thumbnails .active").is(":first-child")) {
      $(".thumbnails img:last-child").click();
    } else {
      $(".thumbnails .active")
        .prev()
        .click();
    }
  });
});

// Start Slider Owl Carosul
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  margin: 10,
  nav: true,
  dots: false,
  rtl: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});


$(window).on('load', function(){
  $("body").css("overflow","auto");

  $(".loading-overlay ").fadeOut(5000);
 });