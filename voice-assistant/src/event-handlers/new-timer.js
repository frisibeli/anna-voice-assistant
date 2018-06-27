const text2speech = require('../text-to-speech');
module.exports = event => new Promise((resolve, reject) => {
    text2speech('За колко минути?');
    let callback = text => {
        text2speech(`Готово! Създадох таймер за ${text} минути.`);
    }
    resolve(callback);
});