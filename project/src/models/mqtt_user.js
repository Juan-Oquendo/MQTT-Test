const { Schema, model } = require('mongoose');

const mqttUserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String },
    is_superuser: { type: Boolean, required: true },
}, {
    collection: 'mqtt_user'
});

//cambiar en los plugins del emqx mongo la encriptacion a bcrypt

module.exports = model('Mqtt_user', mqttUserSchema);