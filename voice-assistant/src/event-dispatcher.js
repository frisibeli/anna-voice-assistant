const makeCall = require('./event-handlers/make-call');
const getTime = require('./event-handlers/get-time');
const {turnOnLamp, turnOffLamp} = require('./event-handlers/iot-handler');
const fallback= require('./event-handlers/fallback-handler');

module.exports = event => {
    console.log(`Dispatch event: ${JSON.stringify(event)}`);
    switch (event.type) {
        case 'get_time': return getTime(event);
        case 'make_call': return makeCall(event);
        case 'turn_lamp_on': return turnOnLamp(event);
        case 'turn_lamp_off': return turnOffLamp(event);
    }
    return fallback(event);
}