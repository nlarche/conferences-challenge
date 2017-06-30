export default class ConferenceService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
    this.api = 'api/v1/conferences';
  }

  getListe() {
    return this.$http.get(this.api).then(response => response.data);
  }

  saveOrUpdate(conference) {
    let action;
    if (conference._id) {
      action = this.update(conference);
    } else {
      action = this.save(conference);
    }
    return action;
  }

  save(conference) {
    return this.$http.post(this.api, conference);
  }

  update(conference) {
    return this.$http.put(`${this.api}/${conference._id}`, conference);
  }
}
