export default class ConferenceController {
  /**
   * Click du bouton edité
   */
  edit(conf) {
    this.onEdit({
      $event: {
        conference: conf,
      },
    });
  }
}
