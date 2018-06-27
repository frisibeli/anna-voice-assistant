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
    }else if(text.includes("включи")){
        type = "turn_lamp_on";
    }else if(text.includes("изключи")){
        type = "turn_lamp_off";
    }

    return new Event(type, options);
}