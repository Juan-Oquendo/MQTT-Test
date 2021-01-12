const router = require('express').Router();

const validations = require('../validations');


const { signup, signin, logout } = require('../controllers/user.controller');


router.post('/register', validations.validate(validations.webUserValidation), signup);
router.get('/login', signin);
router.get('/logout', logout);


module.exports = router;