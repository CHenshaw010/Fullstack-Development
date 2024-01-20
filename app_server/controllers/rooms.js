const fs = require('fs');
const housing = JSON.parse(fs.readFileSync('./data/housing.json', 'utf8'));

/* GET rooms page. */
const rooms = (req, res) => {
    res.render('rooms', {title: "Travlr Getaways - Rooms", 
    housing, 
    highlight_rooms: true});
};

module.exports = {
    rooms
};