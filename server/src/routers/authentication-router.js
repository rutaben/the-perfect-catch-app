const express = require('express');
const { register, login } = require('../controllers/authentication-controller');
const verifyToken = require('../middlewares/verify-token');
const verifyEmail = require('../middlewares/verify-email');
const authentificationConfigMiddleware = require('../middlewares/authentification-config-middleware');

const router = express.Router();
router.use(authentificationConfigMiddleware);

router.post('/', verifyToken);

router.post('/register', register);

router.post('/login', login);

router.get('/check-email', verifyEmail);

module.exports = router;
