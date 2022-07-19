
const express = require('express');
const router = express.Router();

const LogsController = require('../Controller/LogsController');


router.get('/', LogsController.getAll);

module.exports = router;