const mqttController = {}

const ACL = require('../models/mqtt_acl');
const devices = require('../models/device');
const temps = require('../models/temperature');

mqttController.aclRule = async (req, res) => {
    const ACLBody = req.body;

    const newAclRule = new ACL({...ACLBody});
    await newAclRule.save();
    res.send('ACL Ingresado');
}

mqttController.Card = async (req, res) => {
    const { number, allow } = req.body;

    const newRfidCard = new rfidCard({ number, allow })
    await newRfidCard.save();
    res.send('Tarjeta ingresada.');
}

mqttController.Device = async (req, res) => {
    const deviceD = req.body;

    const newDevice = new devices({...deviceD});
    newDevice.device_user_id = req.session.userId;
    await newDevice.save();
    res.send('device ingresado');
}

mqttController.tempCon = async (req, res) => {
    
    const dvcid = await devices.findByUserId(req.session.userId);
    const alltemp = await temps.find({ device_Id: dvcid });
    res.send(alltemp);
}


module.exports = mqttController;