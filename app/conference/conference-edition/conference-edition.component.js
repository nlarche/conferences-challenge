import template from './conference-edition.html';
import controller from './conference-edition.controller';

export default {
  template,
  controller,
  bindings: {
    conference: '<',
    onSubmit: '&',
  },
};
