(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
