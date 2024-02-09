const mongoose = require('mongoose');

// define the rooms schema
const roomSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true },
    name: {type: String, required: true, index: true},
    image: {type: String, required: true},
    rate: {type: String, required: true},
    description: {type: String, required: true}
});

mongoose.model('rooms', roomSchema);