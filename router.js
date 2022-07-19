
const router = require('express').Router();

const LogsRouter = require('./Views/LogsRouter');

router.use('/logs', LogsRouter);

module.exports = router;