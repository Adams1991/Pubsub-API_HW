const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Brewdogs = function () {
  this.data = null;
}

Brewdogs.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:form-submitted', (event) => {
    const breed = event.detail;
    this.getData(breed);
  });
}

Brewdogs.prototype.getData = function (beer_name) {
  const url = `https://api.punkapi.com/v2/${ beer_name }`;
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
