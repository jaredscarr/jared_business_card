var stateChange = {};

stateChange.menuToggle = function() {
  $('.icon-menu').on('click', function(e) {
    e.preventDefault();
    $('.main-nav ul').slideToggle('slow');
  });
};

stateChange.tabsToggle = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
  $('.main-nav ul').hide(); // this kind of fixes the problem but looks strange on load
};

stateChange.expandProject = function() {
  $('.project-body').hide();
  $('#portfolio').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

$(document).ready(function() {
  stateChange.menuToggle();
  stateChange.tabsToggle();
  stateChange.expandProject();
});
