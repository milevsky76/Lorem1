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

  specialistTablinks();
});

// Табы раздела "Кому подойдёт?"
function specialistTablinks() {
  let specTablinks = document.querySelectorAll('.specialists__tablink');

  for (let specTablink of specTablinks) {
    specTablink.addEventListener('mouseover', (evt) => {
      let tablink = document.querySelector('.specialists__tablink.active');

      if (tablink !== evt.target) {
        tablink.classList.remove('active');
        evt.target.classList.add('active');
      }
    });

    specTablink.addEventListener('focus', (evt) => {
      let tablink = document.querySelector('.specialists__tablink.active');

      if (tablink !== evt.target) {
        tablink.classList.remove('active');
        evt.target.classList.add('active');
      }
    });
  }
}