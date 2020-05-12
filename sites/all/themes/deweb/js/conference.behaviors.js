/**
 * @file
 */
(function ($) {

  Drupal.behaviors.fullPageInitConference = {
    attach: function (context, settings) {

      //Change menu link for Conference
      $(".conference .menu .last a").attr('href', '#footer');

      /**
       * Https://github.com/alvarotrigo/fullPage.js.
       */
       $('#fullpage-landing', context).fullpage({
         lockAnchors: false,
         anchors:['main','who-we-are','our-services','process','deadline', 'cases','footer'],

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

})(jQuery);
