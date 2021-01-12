const { Schema, model } = require('mongoose');

const deviceSchema = new Schema({
    serial_number: { type: String, required: true },
    alias: { type: String, required: true },
    device_user_id: { type: Schema.ObjectId, ref: 'Web_user', required: true },
}, {
    timestamps: true
}, {
    collection: 'devices'
});

deviceSchema.statics.findBySerial = async serial_number => {
    const device = await Device.findOne({ serial_number });
    return device;
}

deviceSchema.statics.findByUserId = async userId => {
    const device = await Device.findOne({ device_user_id: userId });
    return device._id;
}

const Device = model('Device', deviceSchema);
module.exports = Device;