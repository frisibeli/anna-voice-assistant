const Event = require('./event');

module.exports = text => {
    let type = "default";
    let options = {}

    console.log(text);

    if (text.includes("час")) {
        type = "get_time";
    }else if(text.includes("стоп")){
        type = "stop";
    }else if(text.includes("обади")){
        type = "make_call";
    }

    return new Event(type, options);
}