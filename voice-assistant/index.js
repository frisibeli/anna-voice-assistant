const Sonus = require('./anna-core');
const speech = require('@google-cloud/speech')({
    projectId: 'voice-assistant',
    keyFilename: './config/voice-assistant-d5964a2c2b89.json'
})

const textToSpeech = require('./src/text-to-speech');
const indentifyEvent = require('./src/event-indentifier');
const dispatchEvent = require('./src/event-dispatcher');

const hotwords = [{ file: 'resources/Anna.pmdl', hotword: 'anna' }]
const language = "bg-BG";
const sonus = Sonus.init({ hotwords, language }, speech)

Sonus.start(sonus)
sonus.on('hotword', (index, keyword) => console.log("!"));
sonus.on('final-result', text => {
    let event = indentifyEvent(text.toLowerCase());
    if(event.type == 'stop'){
        Sonus.stop()
    }else{
        dispatchEvent(event).then(text => {
            textToSpeech(text);
        })
    }
})
sonus.on('error', (error) => console.log(error))

