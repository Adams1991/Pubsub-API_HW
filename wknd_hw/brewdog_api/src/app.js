const FormView = require('./views/form_view.js');
const BrewdogView = require('./views/brewdog_view.js');
const Brewdogs = require('./models/brewdogs.js');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#beer-form')
  const formView = new FormView(form);
  formView.bindEvents();

  const beerContainer = document.querySelector('#beer-container');
  const brewdogView = new BrewdogView(beerContainer);
  brewdogView.bindEvents();

  const brewdogs = new Brewdogs();
  brewdogs.bindEvents();
});
