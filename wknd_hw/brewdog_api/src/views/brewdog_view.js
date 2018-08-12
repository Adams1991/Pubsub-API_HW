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
  this.clearBrewdogs();

  Brewdogs.forEach((brewdog) => {
    const img = this.createImage(Brewdog);
    this.container.appendChild(img);
  });
}

BrewdogView.prototype.clearBrewdogs = function () {
  this.container.innerHTML = '';
}

BrewdogView.prototype.createImage = function (imageUrl) {
  const img = document.createElement('img');
  img.src = imageUrl;
  return img;
}

module.exports = BrewdogView;
