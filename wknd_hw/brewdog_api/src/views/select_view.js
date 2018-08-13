const PubSub = require('../helpers/pub_sub');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Brewdogs:select-data-loaded', (evt) => {
    this.populateSelect(evt.detail);
  });

  this.selectElement.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populateSelect = function (brewdogs) {
  brewdogs.forEach((brewdog) => {
    const option = this.createBrewdogOption(brewdog);
    this.selectElement.appendChild(option);
  })
};

SelectView.prototype.createBrewdogOption = function (brewdog) {
  const option = document.createElement('option');
  option.textContent = brewdog.abv
  option.value = brewdog.name;
  return option;
};

module.exports = SelectView;
