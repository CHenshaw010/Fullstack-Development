/* const fs = require('fs');
const housing = JSON.parse(fs.readFileSync('./data/housing.json', 'utf8'));

// GET rooms page.
const rooms = (req, res) => {
    res.render('rooms', {title: "Travlr Getaways - Rooms", 
    housing, 
    highlight_rooms: true});
};

module.exports = {
    rooms
}; 
*/

const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* Render rooms list view */
const renderRoomsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Travlr Getaways - Rooms';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No rooms exist in database!';
        }
    }

    res.render('rooms', {
        title: pageTitle,
        rooms: responseBody,
        message
    });
};

/* GET room list view */
const roomsList = (req, res) => {
    const path = '/api/rooms';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };

    console.info('>> roomsController.roomsList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, {statusCode}, body) => {
            if (err) {
                console.error(err);
            }
            renderRoomsList(req, res, body);
        }
    )
};

module.exports = {
    roomsList
};