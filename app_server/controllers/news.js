const fs = require('fs');
const articles = JSON.parse(fs.readFileSync('./data/articles.json', 'utf8'));
const latestNews = JSON.parse(fs.readFileSync('./data/latestNews.json', 'utf8'));
const vacationTips = JSON.parse(fs.readFileSync('./data/vacationTips.json', 'utf8'));

/* GET news page. */
const news = (req, res) => {
    res.render('news', {title: "Travlr Getaways - News", 
    articles, latestNews, vacationTips, 
    highlight_news: true});
};

module.exports = {
    news
};