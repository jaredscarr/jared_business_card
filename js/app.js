var portfolioItems = [];

function Projects (project) {
  this.title = project.title;
  this.datePublished = project.datePublished;
  this.details = project.details.
}

Projects.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.data('title', this.title);
  $newProject.data('datePublished', this.datePublished);
  $newProject.data('details', this.details);
}

// portfolioItems.sort(function(a,b) {
//   return (new Date(b.datePublished)) - (new Date(a.datePublished));
// });

// ADDPROJECTFILESHERE.forEach(function(ele) {
//   portfolioItems.push(new Article(ele));
// });

// portfolioItems.forEach(function(a){
//   $('#portfolio').append(a.toHtml())
// });
