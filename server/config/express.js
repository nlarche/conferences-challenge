import express from 'express';
import bodyParser from 'body-parser';

import routes from '../conference/conference.routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Pas de cache pour les requetes reste.
app.use((req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});

app.use('/api/v1/conferences', routes);


export default app;
