var express = require('express');
var router = express.Router();
const newsController = require('../controllers/news');

/* GET news page. */
router.get('/', newsController.news);

module.exports = router;
