const { Schema, model } = require('mongoose');

const tempSchema = new Schema({
    temp: { type: String, required: true },
    device_Id: { type: Schema.ObjectId, ref: 'Device', required: true }
}, {
    timestamps: { createdAt: 'created_at' }
}, {
    versionKey: false
});


tempSchema.statics.insertTemperature = async (temp, device_Id) => {
    try {
        const newTemp = new Temperature({ temp, device_Id });
        await newTemp.save();
        //return true;   
    } catch (error) {
        return error;
    }

}

tempSchema.statics.findTemperatures = async () => {

}

const Temperature = model('Temperature', tempSchema);
module.exports = Temperature;