/**
 * @file
 */
(function ($) {

  Drupal.behaviors.fullPageInitFront = {
    attach: function (context, settings) {

      /**
       * Https://github.com/alvarotrigo/fullPage.js.
       */
      $('#fullpage', context).fullpage({
        lockAnchors: false,
        anchors:['slider','who-we-are','our-services','our-works','our-blog', 'our-team','contacts'],

        navigation: true,
        navigationPosition: 'right',

        //Scrolling
        css3: false,
        scrollingSpeed: 700,
        // autoScrolling: true,.
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopHorizontal: true,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        resize : true,
        paddingTop: '0',
        paddingBottom: '0',
        responsiveWidth: 992,
        responsiveHeight: 600,

        // Custom selectors.
        sectionSelector: '.cd-section',

        //events
        onLeave: function(index, nextIndex, direction){
        },
        afterLoad: function(anchorLink, index){
        },
        afterRender: function(){
        },
        afterResize: function(){
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        }
      });
    }
  };

  $(document).ready(function() {
    setSlideImage();
  });

  $(window).resize(function(){
    setSlideImage();
  });

  function setSlideImage() {
    if ($("#block-views-slider-block").length) {
      $('.view-slider .views-row picture').each(function(i) {
        var image_path = '';
        var flag = 0;

        $(this).children("source").each(function(index) {
          // Get number from string.
          var media = parseInt($(this).attr("media").replace(/\D+/g,""));
          if ($(window).width() > media && flag == 0) {
            // Set image path, delete white spaces.
            image_path = $(this).attr("srcset").replace(/\s+/g, '');
            flag = 1;
          }
        });
        // Set background-image.
        $(this).parent('.slide-image').css('background', 'url(' + image_path + ') center center no-repeat');
        $(this).parent('.slide-image').css({
          height:$(window).height(),
          width:$('#views_slideshow_cycle_teaser_section_slider-block').width()
        });
        // Hide picture.
        $(this).hide();
      });
    }
  }

})(jQuery);
