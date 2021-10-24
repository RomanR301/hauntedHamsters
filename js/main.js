let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar-mobile'),
  $body: $('body'),
  init: function () {
      const swiper = new Swiper('.categories-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        allowTouchMove: false,
        navigation: {
            nextEl: '.categories-next',
            prevEl: '.categories-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            // slidesPerGroup: 3,
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true,
            loopFillGroupWithBlank: true,
          },
          // when window width is >= 992px
          1200: {
            spaceBetween: 0,
            slidesPerView: 'auto',
          }
        }
      })
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.toggleClass('active');
        this.$body.addClass('active')
        $('.header').addClass('active');
        } else {
            this.hamburger.removeClass('open');
            this.nav.toggleClass('active');
            this.$body.removeClass('active')
            $('.header').removeClass('active');
        }
    },  

  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      $(document).ready(function() {
        $(".accordion__item .accordion__button").on("click", function(e) {
        e.preventDefault();
          $(this).parent().toggleClass("active");
          $(this).parent().find(".accordion__content").slideToggle(200);

        });
      });
  }
};

let modal = {
  closeButton: $('.modal__close'),
  closeOverlay: $('.modal'),
  can: 1,
  init: function () {
      this.events();
  },
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

  events: function () {

  }
};


jQuery(function () {
  front.init();
  modal.init();
    
});
