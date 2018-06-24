//const speech = require('@google-cloud/speech');
const fs = require('fs');
const axios = require('axios').default;



console.log('test')
// Creates a client
//const client = new speech.SpeechClient();

const client = axios.create({
    baseURL: 'https://speech.googleapis.com/v1/speech:recognize?key=AIzaSyDXJcW4tDGEPR_hMAIKepMEYs10n9hK7dE',
    //headers: {'X-Custom-Header': 'foobar'}
});

// The name of the audio file to transcribe
const fileName = './test.wav';

// Reads a local audio file and converts it to base64
const file = fs.readFileSync(fileName);
const audioBytes = file.toString('base64');

// The audio file's encoding, sample rate in hertz, and BCP-47 language code
const audio = {
  content: audioBytes,
};
const config = {
  encoding: 'LINEAR16',
  sampleRateHertz: 16000,
  languageCode: 'bg-BG',
};
const request = {
  audio: audio,
  config: config,
};


// Detects speech in the audio file
client
  .post('', request)
  .then(data => {
      console.log(data.data.results[0]);
    //const response = data[0];
    //const transcription = response.results
      //.map(result => result.alternatives[0].transcript)
      //.join('\n');
    //console.log(`Transcription: ${transcription}`);
  })
  .catch(err => {
    console.error(err.response.data);
  });