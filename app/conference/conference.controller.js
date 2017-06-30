export default class ConferenceController {
  constructor(conferenceService) {
    'ngInject';

    this.conferenceService = conferenceService;
    this.loaded = false;

    this.chargement = this.chargement.bind(this);
  }

  chargement() {
    this.loaded = false;
    this.conferenceService.getListe().then((data) => {
      this.liste = data;
      this.loaded = true;
    });
  }

  onEditConference($event) {
    this.conference = $event.conference;
  }

  saveConference($event) {
    this.conferenceService.saveOrUpdate($event.conference).then(this.chargement);
  }

  /**
   * Cycle de vie angularJs
   */
  $onInit() {
    this.chargement();
  }

  resetForm() {
    this.conference = {};
  }
}
