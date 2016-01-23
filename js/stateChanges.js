(function(module) {
  var stateChange = {};

  stateChange.menuToggle = function() {
    $('.icon-menu').on('click', function(e) {
      e.preventDefault();
      $('.main-nav ul').slideToggle('slow'); //work with hamburger menu toggle with this function remember to work on a new function though. Don't delete this
    });
  };
  
  stateChange.initToggling = function() {
    stateChange.menuToggle();
  };
  module.stateChange = stateChange;
})(window);
