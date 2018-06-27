const axios = require('axios');
const fs = require('fs');
const play = require('play');

const getToken = (callback) => {
    return axios.post("https://northeurope.api.cognitive.microsoft.com/sts/v1.0/issueToken", {},
        { headers: { 'Ocp-Apim-Subscription-Key': '1cb5cf2b67184aecb5c64f39335a529e' } })
        .then(token => {
            callback(token.data);
        }).catch(error => {
            console.log(error.response.data)
        })
}


const returnResponse = (token, text) => {
    const bodyTest = "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='bg-BG'><voice  name='Microsoft Server Speech Text to Speech Voice (bg-BG, Ivan)'>" + text + "</voice></speak>";
    return axios.post("https://northeurope.tts.speech.microsoft.com/cognitiveservices/v1", bodyTest,
        {
            headers: {
                'Authorization': `Bearer + ${token}`,
                'Content-Type': 'application/ssml+xml',
                'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
                'User-Agent': 'test'
            },
            responseType: 'arraybuffer'
        })
        .then((response) => {
            const outputFilename = 'response.mp3';
            fs.writeFileSync(outputFilename, response.data);
            play.sound('./response.mp3')
        }).catch(error => {
            console.log("Error: ", error)
        })
}

module.exports = function speak(text){
    getToken((token) => returnResponse(token, text))
}

