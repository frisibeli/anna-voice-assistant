const makeCall = require('./event-handlers/make-call');
const getTime = require('./event-handlers/get-time');
const {turnOnLamp, turnOffLamp} = require('./event-handlers/iot-handler');
const getNews = require('./event-handlers/news-handler');
const newTimer = require('./event-handlers/new-timer');
const joke = require('./event-handlers/joke-handler');
const greeting = require('./event-handlers/greeting');
const fallback= require('./event-handlers/fallback-handler');

module.exports = event => {
    console.log(`Dispatch event: ${JSON.stringify(event)}`);
    switch (event.type) {
        case 'get_time': return getTime(event);
        case 'make_call': return makeCall(event);
        case 'turn_lamp_on': return turnOnLamp(event);
        case 'turn_lamp_off': return turnOffLamp(event);
        case 'new_timer': return newTimer(event);
        case 'greet': return greeting(event);
        case 'get_latest_news': return getNews.getLatestNews(event);
        case 'joke': return joke(event);
    }
    return fallback(event);
}