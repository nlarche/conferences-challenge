import moment from 'moment';

export default function formatDate() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attrs, ctrl) => {

      ctrl.$validators.date = (modelValue, viewValue) => { // eslint-disable-line no-param-reassign
        return moment(viewValue, 'YYYY-MM-DD', true).isValid();
      };
    },
  };
}
