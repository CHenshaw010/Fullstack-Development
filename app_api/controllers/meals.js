const mongoose = require('mongoose'); //.set('debug', true);
const mealsModel = mongoose.model('meals');

// GET: /meals - lists all the rooms
const mealsList = async (req, res) => {
    mealsModel
        .find({}) //empty filter for all
        .exec((err, meals) => {
            if (!meals) {
                return res
                    .status(404)
                    .json({"message": "meal not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(meals);
            }
        });
};

// GET: /meals/:mealCode - returns a single room
const mealsFindCode = async (req, res) => {
    mealsModel
        .find({'code': req.params.mealCode})
        .exec((err, meal) => {
            if (!meal) {
                return res
                    .status(404)
                    .json({"message": "meal not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(meal);
            }
        });
};

module.exports = {
    mealsList,
    mealsFindCode
};