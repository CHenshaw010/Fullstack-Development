/* GET about page. */
const about = (req, res) => {
    res.render('about', {title: "Travlr Getaways - About", highlight_about: true});
};

module.exports = {
    about
};