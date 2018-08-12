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
      const beerName = this.createElement('h2', brewdog.name);
      this.container.appendChild(beerName);

      const beerDesc = this.createElement('p', brewdog.description)
      this.container.appendChild(beerDesc);


    })

};

BrewdogView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = BrewdogView;
