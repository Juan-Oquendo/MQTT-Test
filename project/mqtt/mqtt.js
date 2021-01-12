const mqtt = require('mqtt');
const { mqttConnectUrl, mqtt_options } = require('../src/connection');


//MQTT connection
const client = mqtt.connect(mqttConnectUrl, mqtt_options)

//MQTT reconnection 
client.on('reconnect', (err) => {
    console.log(mqtt_options.clientId)
    console.log('reconnecting: ', err)
})

//MQTT error
client.on('error', (err) => {
    console.log('Connection failed: ', err)
})

module.exports = client;