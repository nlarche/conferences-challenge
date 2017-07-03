import moment from 'moment';
import { dateFormat } from '../utils/constant';

const mapConference = (conf) => {
  const tmp = {
    id: conf._id, // eslint-disable-line no-underscore-dangle
    titre: conf.titre,
    description: conf.description,
    date: moment(conf.date).format(dateFormat),
    logoUrl: conf.logoUrl,
  };
  return tmp;
};

export default class ConferenceService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
    this.api = 'api/v1/conferences';
  }

  getListe() {
    const today = moment().format(dateFormat);
    return this.$http.get(`${this.api}?dateMin=${today}`).then(response => response.data.map(mapConference));
  }

  saveOrUpdate(conference) {
    let action;
    if (conference.id) {
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
    return this.$http.put(`${this.api}/${conference.id}`, conference);
  }
}
