const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const mealsController = require('../controllers/meals');
const roomsController = require('../controllers/rooms');

router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode);

router
    .route('/meals')
    .get(mealsController.mealsList);

router
    .route('/meals/:mealCode')
    .get(mealsController.mealsFindCode);

router
    .route('/rooms')
    .get(roomsController.roomsList);

router
    .route('/rooms/:roomCode')
    .get(roomsController.roomsFindCode);

module.exports = router;