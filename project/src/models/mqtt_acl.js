const { Schema, model } = require('mongoose');

const mqttAclSchema = new Schema({
    username: { type: String, required: true },
    clientid: { type: String, required: true },
    publish: { type: [String], default: undefined },
    subscribe: { type: [String], default: undefined },
    pubsub: { type: [String], default: undefined }
}, {
    collection: 'mqtt_acl'
});


module.exports = model('Mqtt_acl', mqttAclSchema);