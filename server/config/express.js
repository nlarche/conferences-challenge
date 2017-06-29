import express from 'express';
import bodyParser from 'body-parser';

import routes from '../routes/conference.routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/conferences', routes);


export default app;
