import angular from 'angular';

export default class ConferenceEditionController {
  constructor() {
    this.conference = {};
    this.getButtonTitle();

    this.datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;
  }

  $onChanges(changes) {
    this.getButtonTitle();
    if (changes.conference && changes.conference.currentValue) {
      this.conference = angular.copy(changes.conference.currentValue);
    }
  }

  getButtonTitle() {
    if (this.conference && this.conference._id) {
      this.buttonTitle = 'Editer';
    } else {
      this.buttonTitle = 'Ajouter';
    }
  }

  nouveau() {
    console.log('etst')
    this.conference = {};
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
