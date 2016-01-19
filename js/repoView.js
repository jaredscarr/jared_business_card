(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    console.log('render');
    var template = Handlebars.compile($('#projects-template').text());
    return template(repo);
  };

  repoView.index = function() {
    ui();
    console.log('repoViewIndex');
    $('#about ul').append(
      repos.with('forks_count').map(render) //change this to capture all the repos
    );
  };

  module.repoView = repoView;
})(window);
