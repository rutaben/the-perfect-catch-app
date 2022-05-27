const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const server = express();
const {
    SERVER_DOMAIN,
    SERVER_PORT,
    DB_CONNECTION,
  } = process.env;

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

server.use(morgan('tiny'));
server.use(cors(corsOptions));
server.use(express.json());

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