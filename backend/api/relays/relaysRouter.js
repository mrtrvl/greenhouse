const express = require('express');
const router = express.Router();
const relaysController = require('./relaysContoller');

router
    .get('/', relaysController.getAll)
    .get('/:id', relaysController.getById)
    .get('/read/:id', relaysController.readState);

module.exports = router;