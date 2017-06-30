import express from 'express';
import {
  list,
  create,
  getById,
  update,
  load,
} from './conference.controller';

const router = express.Router();

router.route('/')
  .get(list) // GET /api/conferences - Get la liste des conférences
  .post(create); // POST /api/conferences - Création d'un nouvelle conférence

router.route('/:conferenceId')
  .get(load) // GET /api/conferences/:conferenceId -  obtention d'une conférence
  .put(update); // PUT /api/conferences/:conferenceId - Mise à jour d'une conférence

// Chargement d'un conférence quand on demande l'API avec conferenceId
router.param('conferenceId', getById);

export default router;
