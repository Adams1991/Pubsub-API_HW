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
    const beerName = this.createElement('h2', brewdog.name);
    this.container.appendChild(beerName);
  })


};

BrewdogView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = BrewdogView;
