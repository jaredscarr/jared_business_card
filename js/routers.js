page.base('');

page('/', home);
page('/portfolio', portfolio);
page('/about', about);
// page('*', notFound);
page();

function home() {
  homeController.index();
}

function portfolio() {
  portfolioController.index();
}

function about() {
  aboutController.index();
}
