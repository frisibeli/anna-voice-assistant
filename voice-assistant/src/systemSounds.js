const play = require('play');
play.playerList = ['play'];

const playStartUpSound = () => {
    const soundPath = __dirname + '/../resources/startUp.mp3'
    play.sound(soundPath);
}

const playWakeUpSound = () => {
    const soundPath = __dirname + '/../resources/wakeUp.mp3'
    play.sound(soundPath);
}

module.exports = {
    'playWakeUpSound':  playWakeUpSound,
    'playStartUpSound':  playStartUpSound
}
