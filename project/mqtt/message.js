const client       = require('./mqtt');
const Temperature  = require('../src/models/temperature');
const Device       = require('../src/models/device');

function splitTopic(topic) {
    const split = topic.split("/");
    return split;
}

function splitPayload(payload) {
    const msg = payload.toString();
    const splitMsg = msg.split(",");
    return splitMsg;
}

const msgFromDevices = (topic, payload) => {

    const Topics = splitTopic(topic);
    const Payloads = splitPayload(payload);

    if(Topics[1] == "temp_values") {
        const tempHum = Payloads[0] + "," + Payloads[1];
        const serial = Payloads[2];

        (async () => {
            try {
                const device_id = await Device.findBySerial(serial);
                const temp = await Temperature.insertTemperature(tempHum, device_id);
            } catch (error) {
                console.log(error)
            }
    
        })();
    } else if (Topics[0] == "pruebas") {
        console.log(Payloads);
    }
    console.log(topic);

}

client.on('message', msgFromDevices);
