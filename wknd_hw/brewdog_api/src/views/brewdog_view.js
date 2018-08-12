const PubSub = require('../helpers/pub_sub.js');

const BrewdogView = function (container) {
  this.container = container;
}

BrewdogView.prototype.bindEvents = function () {
  PubSub.subscribe('Brewdog:Brewdog-data-loaded', (evt) => {
    const brewdogs = evt.detail;
    this.render(brewdogs);
  });
}

BrewdogView.prototype.render = function (brewdogs) {

  brewdogs.forEach((brewdog) => {
    const beerName = document.createElement('h2');
    beerName.textContent = brewdog.name
    this.container.appendChild(beerName);
  })


};

module.exports = BrewdogView;
