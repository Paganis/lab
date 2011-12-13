$(document).ready(function () {
  function activateTab($tab) {
    var $activeTab = $tab.closest('dl').find('a.active'),
    contentLocation = $tab.attr("href") + 'Tab';
    $activeTab.removeClass('active');
    $tab.addClass('active');
    $(contentLocation).closest('.tabs-content').find('li').hide();
    $(contentLocation).show();
  }
  $('dl.tabs').each(function () {
    var tabs = $(this).children('dd').children('a');
    tabs.click(function (e) {
      activateTab($(this));
    });
  });
  if (window.location.hash) {
    activateTab($('a[href="' + window.location.hash + '"]'));
  }
  /* PLACEHOLDER FOR FORMS ------------- */
  /* Remove this and jquery.placeholder.min.js if you don't need :) */
  //$('input, textarea').placeholder();
  /* DROPDOWN NAV ------------- */
  /*
  $('.nav-bar li a, .nav-bar li a:after').each(function() {
  $(this).data('clicks', 0);
  });
  $('.nav-bar li a, .nav-bar li a:after').bind('touchend click', function(e){
  e.stopPropagation();
  e.preventDefault();
  var f = $(this).siblings('.flyout');
  $(this).data('clicks', ($(this).data('clicks') + 1));
  if (!f.is(':visible') && f.length > 0) {
  $('.nav-bar li .flyout').hide();
  f.show();
  }
  });
  $('.nav-bar li a, .nav-bar li a:after').bind(' touchend click', function(e) {
  e.stopPropagation();
  e.preventDefault();
  if ($(this).data('clicks') > 1) {
  window.location = $(this).attr('href');
  }
  });
  $('.nav-bar').bind('touchend click', function(e) {
  e.stopPropagation();
  if (!$(e.target).parents('.nav-bar li .flyout') || $(e.target) != $('.nav-bar li .flyout')) {
  e.preventDefault();
  }
  });
  $('body').bind('touchend', function(e) {
  if (!$(e.target).parents('.nav-bar li .flyout') || $(e.target) != $('.nav-bar li .flyout')) {
  $('.nav-bar li .flyout').hide();
  }
  });
  */
  $('#featured').orbit({
    animation: 'fade',
    advanceSpeed: 4000,
    timer: true,
    directionalNav: false,
    captions: false,
    captionAnimation: 'none',
    bullets: true,
  });
});