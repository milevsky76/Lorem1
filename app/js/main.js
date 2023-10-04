$(document).ready(function () {
  if ($(window).width() === 320) {
    $('.slider__list').slick({
      variableWidth: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
  }
});