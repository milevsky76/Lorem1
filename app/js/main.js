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

  cabinetItems();
  specialistTablinks();
});

let siteLink = document.querySelector('.site-navigation__link.active');
siteLink?.removeAttribute('href');

// tabs section "Suitable for whom?"
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
// tabs section "Our offices"
function cabinetItems() {
  let cabinetItems = document.querySelectorAll('.cabinet__item');

  for (let cabinetItem of cabinetItems) {
    cabinetItem.addEventListener('mouseenter', (evt) => {
      let item = document.querySelector('.cabinet__item.active');
  
      if (item !== evt.target) {
        let imageActive = document.querySelector('.cabinet__image-item[data-img="' + item.dataset.img + '"]');
        let imageCurrent = document.querySelector('.cabinet__image-item[data-img="' + evt.target.dataset.img + '"]');

        item.classList.remove('active');
        imageActive.classList.remove('active');

        evt.target.classList.add('active');
        imageCurrent.classList.add('active');
      }
    });

    cabinetItem.addEventListener('focus', (evt) => {
      let item = document.querySelector('.cabinet__item.active');

      if (item !== evt.target) {
        let imageActive = document.querySelector('.cabinet__image-item[data-img="' + item.dataset.img + '"]');
        let imageCurrent = document.querySelector('.cabinet__image-item[data-img="' + evt.target.dataset.img + '"]');

        item.classList.remove('active');
        imageActive.classList.remove('active');

        evt.target.classList.add('active');
        imageCurrent.classList.add('active');
      }
    });
  }
}

function findVideos() {
  let videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.video__media');
  let button = video.querySelector('.video__button');
  // let id = parseMediaURL(media);

  let logo = video.querySelector('.video__logo');
  let name = video.querySelector('.video__name');


  video.addEventListener('click', () => {
    // let iframe = createIframe(id);

    link.remove();
    button.remove();

    logo.remove();
    name.remove();

    // video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();