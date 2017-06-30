import angular from 'angular';

import validateDate from './format-date.directive';

export default angular.module('app.utils', [])
  .directive('validateDate', validateDate)
  .name;
