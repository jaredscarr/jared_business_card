var stateChange = {};

stateChange.menuToggle = function () {
  console.log('YUP');
  $('.icon-menu').on('click', function(e) {
    e.preventDefault();
    $('.main-nav ul').slideToggle('slow');
  });
};

$(document).ready(function() {
  stateChange.menuToggle();
});
