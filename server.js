import mongoose from 'mongoose';

// config should be imported before importing any other file
import config from './server/config/config';
import app from './server/config/express';

mongoose.Promise = global.Promise;

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// listen on port config.port
app.listen(3001, () => {
  console.info(`server started on port ${3001} (${config.env})`); // eslint-disable-line no-console
});

export default app;
