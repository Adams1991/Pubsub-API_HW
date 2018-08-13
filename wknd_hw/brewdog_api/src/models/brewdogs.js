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

  PubSub.subscribe('SelectView:change', (event)  => {
  const beer = event.detail;
  this.getData(beer)
})

  PubSub.subscribe('FormView:button-click', (event) => {
    this.getRandomData();
  });

  this.getForSelectData();


}


Brewdogs.prototype.getForSelectData = function (beer_name) {
  const url = `https://api.punkapi.com/v2/beers`;
  const request = new Request(url);
  request.get()
    .then((data) => {
      this.data = data
      PubSub.publish('Brewdogs:select-data-loaded', this.data)
    })
    .catch((message) => {
      console.error(message);
    });
}

Brewdogs.prototype.getData = function (beer_name) {
  const url = `https://api.punkapi.com/v2/beers?beer_name=${beer_name}`;
  const request = new Request(url);
  request.get()
    .then((data) => {
      this.data = data
      PubSub.publish('Brewdogs:brewdog-data-loaded', this.data)
    })
    .catch((message) => {
      console.error(message);
    });
}

Brewdogs.prototype.getRandomData = function () {
  const url = `https://api.punkapi.com/v2/beers/random`;
  const request = new Request(url);
  request.get()
    .then((data) => {
      this.data = data
      PubSub.publish('Brewdogs:brewdog-data-loaded', this.data)
    })
    .catch((message) => {
      console.error(message);
    });
}










module.exports = Brewdogs;
