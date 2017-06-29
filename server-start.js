process.env.NODE_ENV = 'development';
process.env.PORT = '4040';
process.env.MONGO_HOST = 'mongodb://localhost/conferences-challenge';
process.env.MONGO_PORT = '27017';
require('babel-register');
require('babel-polyfill');
require('./server');
