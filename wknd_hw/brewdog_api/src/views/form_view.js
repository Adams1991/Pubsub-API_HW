const PubSub = require('../helpers/pub_sub.js');

const FormView = function (element) {
  this.element = element;
}

FormView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const beer = event.target['beer-input'].value;
    PubSub.publish('FormView:form-submitted', beer);
    this.element.reset();
  });


  const button = document.querySelector('#random-button');
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    PubSub.publish('FormView:button-click');
  });
}

module.exports = FormView;
