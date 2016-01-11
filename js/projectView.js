var filters = {};
var portfolioItems = [];

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

projectsList.sort(function(a,b) {
  return (new Date(b.datePublished)) - (new Date(a.datePublished));
});

projectsList.forEach(function(ele) {
  portfolioItems.push(new Project(ele));
});

portfolioItems.forEach(function(a){
  $('#portfolio').append(a.toHtml());
});

//start filtering code bellow inside of filters object
filters.populateFilter = function() {
  $('article').each(function() { //each article is actually a aproject
    var val = $(this).find('')
  });
};
