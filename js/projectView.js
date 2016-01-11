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

//start filtering code bellow inside of filters object
filters.populateFilter = function() {
  $('article').each(function() {
    var val = $(this).find('.cat').text();
    var optionTag = '<option value="' + val + '">' + val + '</option>';
    $('#category-filter').append(optionTag);
  });
};

filters.handleFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      console.log($(this).val());
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();
      console.log($('article[data-category="' + $(this).val() + '"]').fadeIn());
    } else {
      $('article').fadeIn();
    }
  });
};

//call functions

projectsList.sort(function(a,b) {
  return (new Date(b.datePublished)) - (new Date(a.datePublished));
});

projectsList.forEach(function(ele) {
  portfolioItems.push(new Project(ele));
});

portfolioItems.forEach(function(a){
  $('#portfolio').append(a.toHtml());
});

$(function(){
  filters.populateFilter();
  filters.handleFilter();
});
