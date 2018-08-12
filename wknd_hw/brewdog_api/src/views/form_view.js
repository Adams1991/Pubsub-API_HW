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

  // this.element.addEventListener('click', (evt) => {
  //   evt.preventDefault();
  //   PubSub.publish('FormView:button-submitted');
  //   this.element.reset();
  // });
}

module.exports = FormView;
