var express = require('express');
var router = express.Router();
const mealsController = require('../controllers/meals');

/* GET meals page. */
router.get('/', mealsController.mealsList);

module.exports = router;
