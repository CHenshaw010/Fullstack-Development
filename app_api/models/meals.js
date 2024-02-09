const mongoose = require('mongoose');

// define the meal schema
const mealSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true },
    link: {type: String, required: true, index: true },
    name: {type: String, required: true, index: true},
    image: {type: String, required: true},
    subName: {type: String, required: true},
    subDescription: {type: String, required: true}
});

mongoose.model('meals', mealSchema);