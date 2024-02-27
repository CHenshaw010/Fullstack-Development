const mongoose = require('mongoose'); //.set('debug', true);
const roomsModel = mongoose.model('rooms');

// GET: /rooms - lists all the rooms
const roomsList = async (req, res) => {
    roomsModel
        .find({}) //empty filter for all
        .exec((err, rooms) => {
            if (!rooms) {
                return res
                    .status(404)
                    .json({"message": "room not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(rooms);
            }
        });
};

// GET: /rooms/:roomCode - returns a single room
const roomsFindCode = async (req, res) => {
    roomsModel
        .find({'code': req.params.roomCode})
        .exec((err, room) => {
            if (!room) {
                return res
                    .status(404)
                    .json({"message": "room not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(room);
            }
        });
};

module.exports = {
    roomsList,
    roomsFindCode
};