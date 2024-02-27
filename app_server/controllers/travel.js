const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* Render travel list view */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Travlr Getaways - Travel';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No trips exists in database!';
        }
    }

    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message
    });
};

/* GET travel list view */
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };

    console.info('>> travelController.travelList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, {statusCode}, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    )
};

module.exports = {
    travelList
};