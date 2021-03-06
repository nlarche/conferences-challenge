/**
 * CRUD sur les conférences
 */
import moment from 'moment';
import Conference from './conference.model';

/**
 * Création d'une conférence
 */
function create(req, res) {
  const body = req.body;
  const conference = new Conference({
    titre: body.titre,
    description: body.description,
    date: body.date,
    logoUrl: body.logoUrl,
  });
  conference.save().then(
    () => res.json(conference),
    () => res.status(500).send({
      message: 'erreur lors de la création d\'un conférence',
    }));
}

/**
 * Liste des conférences
 */
function list(req, res) {
  let param;
  // filtre sur les dates à venir
  if (req.query && req.query.dateMin) {
    const date = req.query.dateMin;
    param = { date: { $gt: moment(date).toDate() } };
  }
  Conference.find(param).sort('+date').exec().then(
    rslt => res.json(rslt),
    () => res.status(500).send({
      message: 'erreur lors de la récupération de la liste des conférences',
    }));
}

/**
 * Mise à jour des conférences
 */
function update(req, res) {
  const conf = req.conf; // setté par getById
  const body = req.body;
  const updated = {
    titre: body.titre,
    description: body.description,
    date: body.date,
    logoUrl: body.logoUrl,
  };

  Conference.findByIdAndUpdate(
    { _id: conf._id }, updated).then( // eslint-disable-line no-underscore-dangle
    rslt => res.json(rslt),
    () => res.status(500).send({
      message: 'erreur lors de la mise à jour d\'une conférence',
    }));
}

/**
 * Récupération d'un conférence
 */
function getById(req, res, next, id) {
  Conference.findById(id).exec().then(
    (conference) => {
      req.conf = conference;
      next();
    },
    () => {
      res.status(500).send({
        message: 'erreur lors de la récupération d\'une conférence',
      });
      next();
    });
}

function load(req, res) {
  res.json(req.conf); // setté par getById
}

export {
  load,
  getById,
  create,
  update,
  list,
};
