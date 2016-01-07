var portfolioItems = [];

function Project (project) {
  this.title = project.title;
  this.datePublished = project.datePublished;
  this.details = project.details;
  this.backgroundImg = project.backgroundImg;
  this.link = project.link;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.data('title', this.title);
  $newProject.data('datePublished', this.datePublished);
  $newProject.data('details', this.details);
  $newProject.data('backgroundImg', this.backgroundImg);
  $newProject.data('link', this.link);

  $newProject.removeClass('template');
  return newProject;
}

projectsList.sort(function(a,b) {
  return (new Date(b.datePublished)) - (new Date(a.datePublished));
});

projectsList.forEach(function(ele) {
  portfolioItems.push(new Project(ele));
});

portfolioItems.forEach(function(a){
  $('#portfolio').append(a.toHtml())
});
