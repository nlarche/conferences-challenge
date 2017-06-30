export default class ConferenceController {
  constructor() {
  }

  $onInit() {
    console.log(this.liste);
  }

  edit(conf) {
    this.onEdit({
      $event: {
        conference: conf,
      },
    });
  }
}
