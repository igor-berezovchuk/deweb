/**
 * @file
 */
(function ($) {

  // SCRIPTS FOR THE VIDEOS.
  Drupal.behaviors.dewebMainBehavior = {
    attach: function (context, settings) {

      $("iframe", context).css(
        {'width': '100%'}
      );

      // Hover class.
      $('.consulting', context).hover(function () {
        $(".photo-1").toggleClass("consulting-hover");
      });

      $('.design', context).hover(function () {
        $(".photo-3").toggleClass("design-hover");
      });

      $('.frontend', context).hover(function () {
        $(".photo-2").toggleClass("frontend-hover");
      });

      $('.drupal', context).hover(function () {
        $(".photo-4").toggleClass("drupal-hover");
      });

      // 2.
      $('.photo-1', context).hover(function () {
        $(".consulting").toggleClass("consulting-hover");
      });

      $('.photo-3', context).hover(function () {
        $(".design").toggleClass("design-hover");
      });

      $('.photo-2', context).hover(function () {
        $(".frontend").toggleClass("frontend-hover");
      });

      $('.photo-4', context).hover(function () {
        $(".drupal").toggleClass("drupal-hover");
      });

      $('.cd-3d-nav-trigger', context).click(function () {
        $(".l-region.l-region--header").toggleClass("open");
        $("body").toggleClass("overflow-hidden menu-mob");
        $("html").toggleClass("overflow-hidden menu-mob");
      });

      $('.view-id-portfolio .views-row-1', context).hover(function () {
        $(".view-id-portfolio .views-row-2").toggleClass("bg-hover");
        $(".view-id-portfolio .views-row-3").toggleClass("bg-hover");
      });

      $('.view-id-portfolio .views-row-2', context).hover(function () {
        $(".view-id-portfolio .views-row-1").toggleClass("bg-hover");
        $(".view-id-portfolio .views-row-3").toggleClass("bg-hover");
      });

      $('.view-id-portfolio .views-row-3', context).hover(function () {
        $(".view-id-portfolio .views-row-1").toggleClass("bg-hover");
        $(".view-id-portfolio .views-row-2").toggleClass("bg-hover");
      });
    }
  };

})(jQuery);
