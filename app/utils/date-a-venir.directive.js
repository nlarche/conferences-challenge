import moment from 'moment';
import { dateFormat } from './constant';

/**
 * Directive de validation de date supérieur à la date du jour
 */
export default function formatDate() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attrs, ctrl) => {
      const today = moment().format(dateFormat);

      ctrl.$validators.dateAVenir = (modelValue, viewValue) => { // eslint-disable-line no-param-reassign
        const date = moment(viewValue)
        return date.isAfter(today);
      };
    },
  };
}

