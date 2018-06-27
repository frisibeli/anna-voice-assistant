const Nexmo = require('nexmo');

const options = {};
const nexmo = new Nexmo({
    apiKey: "f4cdf341",
    apiSecret: "0rjDkGNO9Dq4vLyt",
    applicationId: "167a2e22-8182-4ed1-a4da-36ce8460bf56",
    privateKey: "./resources/private.key",
}, options);


const makeCall = () => {
    nexmo.calls.create({
        to: [{
            type: 'phone',
            number: "359886338538",
        }],
        from: {
            type: 'phone',
            number: "12345678901"
        },
        answer_url: ['https://developer.nexmo.com/ncco/tts.json']
    })
}

module.exports = function call() {
    makeCall();
}
