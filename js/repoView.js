(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    var template = Handlebars.compile($('#repo-template').text());
    return template(repo);
  };

  repoView.index = function() {
    ui();
    $('#about ul').append(
      repos.all.map(render)
    );
  };

  module.repoView = repoView;
})(window);
