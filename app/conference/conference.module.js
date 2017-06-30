import angular from 'angular';
import conferenceService from './conference.service';
import conference from './conference.component';
import conferenceListe from './conference-liste/conference-liste.component';
import conferenceEdition from './conference-edition/conference-edition.component';

export default angular.module('app.conference', [])
  .service('conferenceService', conferenceService)
  .component('conference', conference)
  .component('conferenceListe', conferenceListe)
  .component('conferenceEdition', conferenceEdition)
  .name;
