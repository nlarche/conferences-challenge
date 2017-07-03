import angular from 'angular';
import 'angular-messages';

// Style de l'application
import './app.css';
import '../node_modules/bulma/css/bulma.css';

import errorFactory from './app.error';
import config from './app.config';
import template from './app.html';
import controller from './app.controller';


import conference from './conference/conference.module';
import utils from './utils';

/**
 * Bootstrap de l'application
 */
angular
  .module('app', ['ngMessages', utils, conference])
  .config(config)
  .factory('ErrorFactory', errorFactory)
  .component('app', {
    template,
    controller,
  });

