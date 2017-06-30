/**
 * CRUD sur les conférences
 */
import Conference from '../models/conference.model';

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

function list(req, res) {
  Conference.find().sort('-date').exec().then(
    rslt => res.json(rslt),
    () => res.status(500).send({
      message: 'erreur lors de la récupération de la liste des conférences',
    }));
}

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
