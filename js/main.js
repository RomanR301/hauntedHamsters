let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar-mobile'),
  $body: $('body'),
  init: function () {
      this.events();
      $( "#datepicker" ).datepicker({
        dateFormat: "dd MM yy"
     });
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
      const productsCarousel = new Swiper(".new-products-carousel", {
        slidesPerView: 4,
        spaceBetween: 35,
        slidesPerColumn: 1,
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
          992: {
            slidesPerView: 4,
          }
        },
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: '.new-products-carousel-next',
          prevEl: '.new-products-carousel-prev',
      },

      });
      const productsRecommendationsCarousel = new Swiper(".product-detailed__recommendations_carousel", {
        slidesPerView: 4,
        spaceBetween: 35,
        slidesPerColumn: 1,
        loop: true,
        allowTouchMove: false,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
            allowTouchMove: true,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 35,
            allowTouchMove: true,
          },
          992: {
            slidesPerView: 4,
            allowTouchMove: false,
          }
        },
        pagination: {
          el: ".product-detailed__recommendations_carousel_pagination",
        },
      });
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
  openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },
  hoverTab: function (el, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    el.currentTarget.className += " active";
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
    heroHeight = $('.hero-screen').height();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100 ) {
        $('.home-page-header').addClass("hidden");
      } else {
        $('.home-page-header').removeClass("hidden");  
      }
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400 ) {
        $('.home-page-header').addClass("bg-changed");
      } else {
        $('.home-page-header').removeClass("bg-changed");  
      }
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > heroHeight ) {
        $('.home-page-header').addClass("scroll");
      } else {
        $('.home-page-header').removeClass("scroll");  
      }
    });
      $(document).on('click', '.modalTrigger', function (e) {
          e.preventDefault();
          let self = $(this),
              target = self.attr('data-modal');
          modal.openModal(target);

      });

      $(document).on('click', '.modal', function (event) {
          let self = '#' + $(this).attr('id');
          if (event.target.className == 'modal__body') {
              modal.closeModal(self);
          }
      });

      $(document).on('click', '.modal__close', function () {
          let self = '#' + $(this).closest('.modal').attr('id');
          modal.closeModal(self);
      });
        $(document).on('click', '.scroll-to-top i', function () {
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 500);
      });
        $(document).on('click', '.scroll-down i', function () {
            $('html, body').animate({
                scrollTop: $(this).closest("section").next().offset().top - 90
             }, "slow");
      });

  }
};


jQuery(function () {
  front.init();
  modal.init();
    
});

/* Ukrainian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Maxim Drogobitskiy (maxdao@gmail.com). */
/* Corrected by Igor Milla (igor.fsp.milla@gmail.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.uk = {
	closeText: "Закрити",
	prevText: "&#x3C;",
	nextText: "&#x3E;",
	currentText: "Сьогодні",
	monthNames: [ "Січень","Лютий","Березень","Квітень","Травень","Червень",
	"Липень","Серпень","Вересень","Жовтень","Листопад","Грудень" ],
	monthNamesShort: [ "Січ","Лют","Бер","Кві","Тра","Чер",
	"Лип","Сер","Вер","Жов","Лис","Гру" ],
	dayNames: [ "неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота" ],
	dayNamesShort: [ "нед","пнд","вів","срд","чтв","птн","сбт" ],
	dayNamesMin: [ "Нд","Пн","Вт","Ср","Чт","Пт","Сб" ],
	weekHeader: "Тиж",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.uk );

return datepicker.regional.uk;

} ) );