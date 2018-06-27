const record = require('node-record-lpcm16');
const {Detector, Models} = require('snowboy');

const models = new Models();

models.add({
  file: 'resources/snowboy.umdl',
  sensitivity: '0.5',
  hotwords : 'snowboy'
});

const detector = new Detector({
  resource: "resources/common.res",
  models: models,
  audioGain: 2.0
});

const mic = record.start({
  threshold: 0,
  verbose: true
});

mic.pipe(detector);
record.stop();
record.start();
mic.pipe(detector);