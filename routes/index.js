const router = require('express').Router();

router.use('/', require('./search'));
router.use('/', require('./data'));
router.use('/', require('./session'));
router.use('/', require('./import'));
router.use('/', require('./export'));

module.exports = router;