import template from './conference-liste.html';
import controller from './conference-liste.controller';

export default {
  template,
  controller,
  bindings: {
    liste: '<',
    onEdit: '&',
  },
};
