const express = require('express');
const router = express.Router();
const sensorsController = require('./sensorsController');

router
    .get('/', sensorsController.getAll)
    .get('/:id', sensorsController.getById);

module.exports = router;