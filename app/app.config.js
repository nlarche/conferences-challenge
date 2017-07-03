/**
 * Configuration de l'application
 */
export default function ($httpProvider) {
  'ngInject';

  $httpProvider.interceptors.push('ErrorFactory');
}
