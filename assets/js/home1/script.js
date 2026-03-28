(function ($) {
  "use strict";
  $('.gallery-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    infinite: true,
    variableWidth: true,
    arrows: true,
    speed: 500,
    prevArrow: `<i class="fa-solid arrows arrow-prev fa-arrow-left"></i>`,
    nextArrow: `<i class="fa-solid arrows arrow-next fa-arrow-right"></i>`,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });
  // // Service slider js
  $(".our-doctors-home1-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    prevArrow: $('.custom-prev'),
    nextArrow: $('.custom-next'),
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.testimonial-sliders').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  // ===================================
})(jQuery);