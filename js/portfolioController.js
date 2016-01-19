(function(module) {
  var portfolioController = {};
  portfolioController.index = function() {
    $('.tab-content').hide();
    $('#portfolio').fadeIn();
  };

  module.portfolioController = portfolioController;
})(window);
