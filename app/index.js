import angular from 'angular';
import 'angular-messages';

import template from './app.html';

import './app.css';
import '../node_modules/bulma/css/bulma.css';

import conference from './conference/conference.module';
import utils from './utils';

/**
 * Bootstrap de l'application
 */
angular
  .module('app', ['ngMessages', utils, conference])
  .component('app', {
    template,
    controller: class MainController {
      constructor() {
        console.log('app initialisée');
      }
    },
  });
