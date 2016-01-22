(function(module) {
  var filters = {};
  Project.portfolioItems = [];
  var projectsList = [];

  function Project (project) {
    this.title = project.title;
    this.datePublished = project.datePublished;
    this.category = project.category;
    this.details = project.details;
    this.image = project.image;
    this.link = project.link;
  }

  Project.prototype.toHtml = function() {
    var templateScript = $('#project-template').html();
    var compiledTemplate = Handlebars.compile(templateScript);
    this.daysAgo = parseInt((new Date() - new Date(this.datePublished))/60/60/24/1000);
    this.publishStatus = this.datePublished ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    var html = compiledTemplate(this);
    $('#portfolio').append(html);
  };

  Project.initIndexPage = function() {
    Project.portfolioItems.forEach(function(a){
      $('#portfolio').append(a.toHtml());
    });
    stateChange.initToggling();
    // Project.prototype.loadImages();
  };

  Project.loadAll = function(data) {
    projectsList.sort(function(a,b) {
      return (new Date(b.datePublished)) - (new Date(a.datePublished));
    });

    projectsList.forEach(function(ele) {
      Project.portfolioItems.push(new Project(ele));
    });
  };

  Project.fetchAll = function() {
    if (localStorage.data) {
      Project.loadAll(JSON.parse(localStorage.data));
      Project.initIndexPage();
    } else {
      $.getJSON('data/projects.json', function(data) {
        projectsList = data;
        Project.loadAll(data);
        localStorage.data = JSON.stringify(data);
        Project.initIndexPage();
      });
    }
  };
  // //filter images out of objects into a new array using map
  // Project.prototype.loadImages = function() {
  //   var arrayOfImages = Project.portfolioItems.map(function(obj) {
  //     return obj.image;
  //   });
  //
  //   var stringifiedLinks = arrayOfImages.reduce(function(prev, current) {
  //     return prev + '<li>' + current + '</i>';
  //   }, '');
  //   $('#image-nav').append('<ul>' + stringifiedLinks + '</ul>');
  // };

  module.Project = Project;
  module.filters = filters;
})(window);
