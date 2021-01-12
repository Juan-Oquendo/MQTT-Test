const router = require('express').Router();

const { aclRule, Card, Device, tempCon } = require('../controllers/mqtt.controller');

require('../../mqtt/subscribe'); //mqtt_subscribe
require('../../mqtt/publish');   //mqtt_publish
require('../../mqtt/message');   //mqtt_message

router.post('/acl', aclRule);
router.post('/card', Card);
router.post('/device', Device);
router.get('/getTemps', tempCon);

module.exports = router;