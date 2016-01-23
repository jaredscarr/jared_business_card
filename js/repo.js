(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('/github/users/jaredscarr/repos', function(data) {
      repos.all = data;
      callback();
    });
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
