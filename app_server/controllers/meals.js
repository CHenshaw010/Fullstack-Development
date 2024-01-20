const fs = require('fs');
const food = JSON.parse(fs.readFileSync('./data/food.json', 'utf8'));

/* GET meals page. */
const meals = (req, res) => {
    res.render('meals', {title: "Travlr Getaways - Meals", 
    food, 
    highlight_meals: true});
};

module.exports = {
    meals
};