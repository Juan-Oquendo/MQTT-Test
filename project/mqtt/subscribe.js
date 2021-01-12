const client = require('./mqtt');
const device = require('../src/models/device');


const subs = async () => {
  console.log('Successful mqtt connection')

  const devices = await device.find().lean();
  //console.log(devices[2].serial_number)
  
  devices.forEach(device_serial => {
    //console.log(device_serial.serial_number);
    const serialNumber = device_serial.serial_number;
    client.subscribe(`${serialNumber}/#`, function (error) {
      console.log(`${serialNumber}/#`)
    });

  });

  client.subscribe('+/#', function (error) {
    console.log("Succesful suscription")
  });
}

client.on('connect', subs);