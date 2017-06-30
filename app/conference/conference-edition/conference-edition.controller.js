import angular from 'angular';

export default class ConferenceEditionController {
  constructor() {
    this.conference = {};
    this.getButtonTitle();
  }

  $onChanges(changes) {
    this.getButtonTitle();
    if (changes.conference && changes.conference.currentValue) {
      this.conference = angular.copy(changes.conference.currentValue);
    }
  }

  getButtonTitle() {
    if (this.conference && this.conference.id) {
      this.buttonTitle = 'Editer';
    } else {
      this.buttonTitle = 'Ajouter';
    }
  }

  nouveau() {
    this.getButtonTitle();
    this.form.$setPristine();
    this.onReset();
  }

  submit() {
    if (this.form.$invalid) {
      return;
    }
    this.onSubmit({
      $event: {
        conference: this.conference,
      },
    });
    this.nouveau();
  }
}
