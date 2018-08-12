const PubSub = require('../helpers/pub_sub.js');

const BrewdogView = function (container) {
  this.container = container;
}

BrewdogView.prototype.bindEvents = function () {
  PubSub.subscribe('Brewdogs:brewdog-data-loaded', (event) => {
    const brewdogs = event.detail;
    this.render(brewdogs);
  });
}

BrewdogView.prototype.render = function (brewdogs) {
  this.container.innerHTML = '';

  brewdogs.forEach((brewdog) => {
    const beerName = document.createElement('h2');
    beerName.textContent = brewdog.name
    this.container.appendChild(beerName);
  })


};

module.exports = BrewdogView;
