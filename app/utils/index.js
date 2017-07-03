import angular from 'angular';

import validateDate from './format-date.directive';
import dateAVenir from './date-a-venir.directive';

export default angular.module('app.utils', [])
  .directive('validateDate', validateDate)
  .directive('dateAVenir', dateAVenir)
  .name;
