const axios = require('axios');

const token = "f49166c13a71a6f6298f9ad397d46d296800c65b";
const api = 'https://developer-api.seemelissa.com/v1';
const serial_number = "NFKI513WA3L";
const command = "send_raw_code";
const code_type = "custom";


module.exports.turnOnLamp = () => {
    const code_id = 3967;
    return new Promise((resolve, reject) => {
        axios.post(`${api}/provider/send`, { serial_number, command, code_id, code_type }, { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } })
            .then((response) => {
                resolve('Включих лампата.')
                console.log(response);
            }).catch(error => {
                reject();
                console.log(error);
            })
    })
}

module.exports.turnOffLamp = () => {
    const code_id = 3968;
    return new Promise((resolve, reject) => {
        axios.post(`${api}/provider/send`, { serial_number, command, code_id, code_type }, { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } })
            .then((response) => {
                resolve('Изключих лампата.')
                console.log(response);
            }).catch(error => {
                reject();
                console.log(error);
            })
    })
}

