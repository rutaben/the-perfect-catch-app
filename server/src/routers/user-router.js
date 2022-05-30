const express = require('express');
const { getUsers } = require('../controllers/user-controller');

const router = express.Router();

// TODO: enable authorization or delete 'get users' option to prevent data access to any user
router.get('/', getUsers);

module.exports = router;
