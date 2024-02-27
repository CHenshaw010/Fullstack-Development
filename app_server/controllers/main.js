const fs = require('fs');
const indexBlog = JSON.parse(fs.readFileSync('./data/indexBlog.json', 'utf8'));

/* GET home page. */
const index = (req, res) => {
    res.render('index', {title: "Travlr Getaways - Home", 
    indexBlog, 
    highlight_index: true});
};

module.exports = {
    index
};