require([
  'jquery',
  'slick',
  'domReady!'
], function ($) {

$window = $(window);
$slickSlider = $('.gallery-slider');

 const settings = $('.gallery-slider').not('.slick-initialized').slick({
    dots: true,
    prevArrow: null,
    nextArrow: null,
    infinite: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      },
      {
        breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
      }
    ]
  });

  $window.on('resize', function() {
    if ($window.width() > 767) {
      if ($slickSlider.hasClass('slick-initialized'))
            $slickSlider.slick('unslick');
      return
    }

    if (!$slickSlider.hasClass('slick-initialized')) {
      return $slickSlider.not('.slick-initialized').slick(settings);
    }
  });  
});