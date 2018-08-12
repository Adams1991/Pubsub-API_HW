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

  const wrongInput= `There ain't no brew for you with this mash up of letters.....sober up and try something different....maybe something that rhymes with cunk.`

  if (brewdogs.length === 0) {
  const noBeer = this.createElement('h4', wrongInput )
  this.container.appendChild(noBeer)
    } else {
  brewdogs.forEach((brewdog) => {
    const beerName = this.createElement('h2', brewdog.name);
    this.container.appendChild(beerName);

    const beerDesc = this.createElement('p', brewdog.description)
    this.container.appendChild(beerDesc);

    const beerAge = this.createElement('h3', `First Brewed: ${brewdog.first_brewed}`)
    this.container.appendChild(beerAge);

    const beerAbv = this.createElement('h5', `ABV: ${brewdog.abv}%`)
    this.container.appendChild(beerAbv);
  })
}


};

BrewdogView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = BrewdogView;
