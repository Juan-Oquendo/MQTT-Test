const User = require('../models/web_user');
const { sessionDontExist } = require('../messages/session.message');

module.exports = async (req, res, next) => {
    if (!req.session.userId) {
        res.send(sessionDontExist);
    }
    else {
        try {
            const userData = await User.findById(req.session.userId);
            res.locals = { email: userData.email }
            //console.log(res.locals)
            next();
        } catch (error) {
            res.send(error)
        }
    }
}