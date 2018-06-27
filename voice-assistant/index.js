const Sonus = require('sonus');
const speech = require('@google-cloud/speech')({
    projectId: 'voice-assistant',
    keyFilename: './voice-assistant-d5964a2c2b89.json'
})

const hotwords = [{ file: 'resources/Anna.pmdl', hotword: 'snowboy' }]
const language = "bg-BG";
const sonus = Sonus.init({ hotwords, language }, speech)

Sonus.start(sonus)
sonus.on('hotword', (index, keyword) => console.log("!"));
sonus.on('final-result', result => {
    console.log(result)
    if (result.includes("стоп")) {
        Sonus.stop()
    }
})
sonus.on('error', (error) => console.log(error))

module.exports.whatToSay = "test";


