const express = require('express');
const router = express.Router();
const camerasController = require('./camerasController');
router.get('/getimage', camerasController.getImage);

module.exports = router;