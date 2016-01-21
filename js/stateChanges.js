(function(module) {
  var stateChange = {};

  stateChange.menuToggle = function() {
    $('.icon-menu').on('click', function(e) {
      e.preventDefault();
      $('.main-nav ul').slideToggle('slow');
    });
  };

  stateChange.initToggling = function() {
    stateChange.menuToggle();
  };
  module.stateChange = stateChange;
})(window);
