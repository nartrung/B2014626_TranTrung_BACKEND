const express = require('express');
const contacts = require('../controllers/contact.controller');

const router = express.Router();

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete)

router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

module.exports = router;