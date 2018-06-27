const Sonus = require('./anna-core');
const speech = require('@google-cloud/speech')({
    projectId: 'voice-assistant',
    keyFilename: './config/voice-assistant-d5964a2c2b89.json'
})

const textToSpeech = require('./src/text-to-speech');
const indentifyEvent = require('./src/event-indentifier');
const dispatchEvent = require('./src/event-dispatcher');
const systemSounds = require('./src/systemSounds');


const hotwords = [{ file: 'resources/Anna.pmdl', hotword: 'anna' }]
const language = "bg-BG";
const sonus = Sonus.init({ hotwords, language }, speech)

Sonus.start(sonus);
systemSounds.playStartUpSound();
sonus.on('hotword', (index, keyword) => {
    console.log("!");
    systemSounds.playWakeUpSound();
});

let dialogueCallback = null;
sonus.on('final-result', text => {
    if(!dialogueCallback){
        let event = indentifyEvent(text.toLowerCase());
        if (event.type == 'stop') {
            //Sonus.stop()
        } else {
            dispatchEvent(event).then(result => {
                if(result.constructor.name == "String"){
                    textToSpeech(result);
                }else if(result.constructor.name == "Function"){
                    dialogueCallback = result
                    setTimeout(() => Sonus.trigger(sonus, 0), 2000)
                }
            })
        }
    }else{
        dialogueCallback(text);
        dialogueCallback = null;
    }
})
sonus.on('error', (error) => console.log(error))

