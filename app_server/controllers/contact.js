/* GET contact page. */
const contact = (req, res) => {
    res.render('contact', {title: "Travlr Getaways - Contact", highlight_contact: true});
};

module.exports = {
    contact
};