let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar-mobile'),
  $body: $('body'),
  init: function () {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 0, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 200, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
      const swiper = new Swiper('.about-slider', {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 40,
        centeredSlides: true,
        breakpoints: {
          320: {
            spaceBetween: 15,
          },
          767: {
            spaceBetween: 40,
          }
        }
      })
  },
};

let modal = {
  closeButton: $('.modal__close'),
  closeOverlay: $('.modal'),
  can: 1,
  openModal: function (id) {
      let modalWindow = $(id);
      modalWindow.fadeIn();
      modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');
  },

  closeModal: function (id) {
      let modalWindow = $(id);
      modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
      modalWindow.fadeOut();
  },
};

$(document).ready(function() {
  $(".accordion__item .accordion__button").on("click", function(e) {
  e.preventDefault();
      if ($(this).parent().hasClass("active")) {
      $(this).parent().removeClass("active");
      $(this).parent().find(".accordion__content").slideUp(200);
      } else {
      $(".accordion__item").removeClass("active");
      $(this).parent().addClass("active");
      $(".accordion__content").slideUp(200);
      $(this).parent().find(".accordion__content").slideDown(200);
      }
  });
  $(document).on('click', 'a', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        $('body').removeClass('active')
        $('.navbar').removeClass('active');
        $('.hamburger').removeClass('open');
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top) - 160
            }, 400);
            return false;
        }
     
    }
  });
  $(document).on('click', '.hamburger', function () {
    if ($('.hamburger').hasClass('open')) {
      $('.hamburger').removeClass('open');
      $('.navbar').toggleClass('active');
      $('body').removeClass('active')
      } else {
        $('.hamburger').addClass('open');
        $('.navbar').toggleClass('active');
        $('body').addClass('active')
      }
    })
});

jQuery(function () {
  front.init();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 0 ) {
    $('.header').addClass("scroll");
  } else {
    $('.header').removeClass("scroll");  
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const deadline = new Date(2021, 10, 21);
  let timerId = null;
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['Day', 'Days', 'Days']);
    $hours.dataset.title = declensionNum(hours, ['Hours', 'Hours', 'Hours']);
    $minutes.dataset.title = declensionNum(minutes, ['Minutes', 'Minutes', 'Minutes']);
    $seconds.dataset.title = declensionNum(seconds, ['Seconds', 'Seconds', 'Seconds']);
  }
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});