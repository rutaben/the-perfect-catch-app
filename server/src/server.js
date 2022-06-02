const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const authenticationRouter = require('./routers/authentication-router');
const userRouter = require('./routers/user-router');
const movieRouter = require('./routers/movie-router');
const genreRouter = require('./routers/genre-router');

const server = express();
const { SERVER_DOMAIN, SERVER_PORT, DB_CONNECTION } = process.env;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

server.use(morgan('tiny'));
server.use(cors(corsOptions));
server.use(express.json());

server.use('/api/authentication', authenticationRouter);
server.use('/api/users', userRouter);
server.use('/api/movies', movieRouter);
server.use('/api/genres', genreRouter);

server.listen(SERVER_PORT, () => {
  console.log(`Page is running on http://${SERVER_DOMAIN}:${SERVER_PORT}/`);
  (async () => {
    try {
      await Mongoose.connect(DB_CONNECTION);
      console.log('Successfully connected to database');
    } catch (error) {
      console.error('Connection to database was unsuccessful');
    }
  })();
});
