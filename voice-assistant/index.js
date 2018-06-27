const Sonus = require('./anna-core');
const speech = require('@google-cloud/speech')({
    projectId: 'voice-assistant',
    keyFilename: './config/voice-assistant-d5964a2c2b89.json'
})
const speak = require('./src/text-to-speech');
const call = require('./src/event-handlers/make-call');

const play = require('play');
play.playerList = ['play'];

const hotwords = [{ file: 'resources/Anna.pmdl', hotword: 'anna' }]
const language = "bg-BG";
const sonus = Sonus.init({ hotwords, language }, speech)

const startUpSound = __dirname + '/resources/start-up-sound.mp3';
play.sound(startUpSound);

Sonus.start(sonus);
sonus.on('hotword', (index, keyword) => {
    console.log("!");
    const wakeUpSound = __dirname + '/resources/wake-up-sound.mp3';
    play.sound(wakeUpSound);
});
sonus.on('final-result', result => {
    console.log(result);
    speak(result);
    if (result.includes("стоп")) {
        Sonus.stop()
    }
    if (result.includes("обади се")) {
        call()
    }
})
sonus.on('error', (error) => console.log(error))

