const client = require('./mqtt');

client.publish('led1', 'off', (err) => {
    console.log(err || "Message send")
})