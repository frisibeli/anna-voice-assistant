const Nexmo = require('nexmo');

const PHONE_NUMBER = "359886338538";

const options = {};
const nexmo = new Nexmo({
    apiKey: "f4cdf341",
    apiSecret: "0rjDkGNO9Dq4vLyt",
    applicationId: "167a2e22-8182-4ed1-a4da-36ce8460bf56",
    privateKey: __dirname + '/../../resources/private.key'
}, options);


const makeCall = () => {
    nexmo.calls.create({
        to: [{
            type: 'phone',
            number: PHONE_NUMBER,
        }],
        from: {
            type: 'phone',
            number: "12345678901"
        },
        answer_url: ['https://developer.nexmo.com/ncco/tts.json']
    }, (res, err) => {
        if (res) console.log(res.status)
        else console.log(err)
    }
    )
}

module.exports = event => new Promise((resolve, reject) => {
    makeCall();
    resolve(`Обаждам се на ${PHONE_NUMBER}`);
});
