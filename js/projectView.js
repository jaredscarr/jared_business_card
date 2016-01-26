(function(module) {
  var filters = {};
  Project.portfolioItems = [];

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
    Project.prototype.loadImages();
  };


  //new code added
  //this function will take lines 46 - 52 and add them to one functions
  Project.loadAll = function(data) {
    data.sort(function(a,b) {
      return (new Date(b.datePublished)) - (new Date(a.datePublished));
    });

    data.forEach(function(ele) {
      Project.portfolioItems.push(new Project(ele));
    });
  };

  //this will retrieve the data from the local source, process it and hand of control to the view
  Project.fetchAll = function() {
    if (localStorage.data) {
      Project.loadAll(JSON.parse(localStorage.data));
      Project.initIndexPage(); //need to figure out what to name this and why
    } else {
      $.getJSON('data/projects.json', function(data) {
        Project.loadAll(data);
        localStorage.data = JSON.stringify(data);
        Project.initIndexPage(); //need to figure out what to name this and why
      });
    }
  };
  //filter images out of objects into a new array using map
  Project.prototype.loadImages = function() {
    var arrayOfImages = Project.portfolioItems.map(function(obj) {
      return obj.image;
    });

    var stringifiedLinks = arrayOfImages.reduce(function(prev, current) {
      return prev + '<li>' + current + '</i>';
    }, '');
    $('#image-nav').append('<ul>' + stringifiedLinks + '</ul>');
  };

  //reduce the new array into a string holding the image links

  module.Project = Project;
  module.filters = filters;
})(window);
