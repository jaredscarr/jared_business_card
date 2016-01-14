(function(module) {
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
  };

  stateChange.expandProject = function() {
    $('.project-body').hide();
    $('#portfolio').on('click', 'a.read-on', function(e) {
      e.preventDefault();
      $(this).parent().find('*').slideDown();
      $(this).hide();
      $('.read-less').show();
    });
  };

  stateChange.truncateProject = function () {
    $('.read-less').hide();
    $('#portfolio').on('click', 'a.read-less', function(e) {
      $(this).hide();
      $('.project-body').slideUp();
      $('.read-on').show();
    });
  };

  // $(document).ready(function() {
  //   stateChange.menuToggle();
  //   stateChange.tabsToggle();
  //   stateChange.expandProject();
  //   stateChange.truncateProject();
  // });

  //new code here
  //this function will handle the above calls
  stateChange.initToggling = function() {
    stateChange.menuToggle();
    stateChange.tabsToggle();
    stateChange.expandProject();
    stateChange.truncateProject();
  };
  module.stateChange = stateChange;
})(window);
