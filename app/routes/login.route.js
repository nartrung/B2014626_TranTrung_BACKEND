const express = require('express');
const login = require('../controllers/login.controller');

const router = express.Router();

router.route("/")
    .get(login.access)
    .post(login.login);

module.exports = router;