export default class ConferenceController {
    edit(conf) {
    this.onEdit({
      $event: {
        conference: conf,
      },
    });
  }
}
