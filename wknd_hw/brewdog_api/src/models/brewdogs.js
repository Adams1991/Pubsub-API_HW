const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Brewdogs = function () {
  this.data = null;
}

Brewdogs.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:form-submitted', (event) => {
    const beer = event.detail;
    this.getData(beer);
  });
}

Brewdogs.prototype.getData = function (beer_name) {
  const url = `https://api.punkapi.com/v2/beers?beer_name=${beer_name}`;
  const request = new Request(url);
  request.get()
    .then((data) => {
      this.data = data.message;
      PubSub.publish('BrewDog:dog-data-loaded', this.data);
    })
    .catch((message) => {
      console.error(message);
    });
}

module.exports = Brewdogs;
