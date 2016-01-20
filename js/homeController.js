(function(module) {
  var homeController = {};
  homeController.index = function() {
    $('.tab-content').hide();
    $('#main').fadeIn();
  };

  module.homeController = homeController;
})(window);
