var express = require('express');
var router = express.Router();
const contactController = require('../controllers/contact');

/* GET contact page. */
router.get('/', contactController.contact);

module.exports = router;
