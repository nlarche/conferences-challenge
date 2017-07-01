const envVars = process.env;
/**
 * Configuration des variables d'environnement de l'application
 */
const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT,
  },
};

export default config;
