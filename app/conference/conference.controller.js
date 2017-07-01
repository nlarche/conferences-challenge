export default class ConferenceController {
  constructor(conferenceService) {
    'ngInject';

    this.conferenceService = conferenceService;
    this.loaded = false;

    this.chargement = this.chargement.bind(this);
  }
  /**
   * Chargement de la liste des conférence
   */
  chargement() {
    this.loaded = false;
    this.conferenceService.getListe().then((data) => {
      this.liste = data;
      this.loaded = true;
    });
  }
  /**
   * Callback appelée du click sur le bouton editer d'un conférence
   */
  onEditConference($event) {
    this.conference = $event.conference;
  }
  /**
   * CallBack appelée au submit du formulaire
   */
  saveConference($event) {
    this.conferenceService.saveOrUpdate($event.conference).then(this.chargement);
  }

  /**
   * Cycle de vie angularJs
   */
  $onInit() {
    this.chargement();
  }

  /**
   * Callback appelée au reset du formulaire
   */
  resetForm() {
    this.conference = {};
  }
}
