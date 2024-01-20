const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel page. */
const travel = (req, res) => {
    res.render('travel', {title: "Travlr Getaways - Travel", 
    trips, 
    highlight_travel: true});
};

module.exports = {
    travel
};