const userController = {};

const validationError = require('../errors/validationError');
const User = require('../models/web_user');

const { emailExist, emailOrPassIncorrect} = require('../messages/user.message');
const { logIn, registered } = require('../messages/success.message')

userController.signup = async (req, res, next) => {

    const { email, password /*confirm_password*/ } = req.body;

    const user = await User.createUser(email, password);

    if (user) {
        res.json( registered );
    } else {
        next(new validationError({ message: emailExist }));
    }

}



userController.signin = async (req, res, next) => {

    const { email, password } = req.body

    const user = await User.authenticate(email, password);

    if (user){
        req.session.userId = user.id;
        req.session.loggedIn = true;
        res.json( logIn );
    } else {
        next(new validationError({ message: emailOrPassIncorrect }));
    }

}

userController.logout = (req, res) => {

}

module.exports = userController;