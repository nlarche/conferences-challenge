import moment from 'moment';
/**
 * Directive de validation de date au format YYYY-MM-DD
 */
export default function formatDate() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attrs, ctrl) => {
      ctrl.$validators.date = (modelValue, viewValue) => { // eslint-disable-line no-param-reassign
        const date = moment(viewValue, 'YYYY-MM-DD', true);
        return date.isValid();
      };
    },
  };
}
