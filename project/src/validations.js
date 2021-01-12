const yup = require('yup');
const validationError = require('./errors/validationError');

function validate(validation) {
    return (req, res, next) => {
        try {
            validation(req.body);
            next();
        } catch (error) {
            next(new validationError(error));
        }
    }
}

function webUserValidation(data) {
    const schema = yup.object().shape({
        email: yup.string().email(),
        password: yup.string().min(8),
        confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
    });
    schema.validateSync(data);
}

module.exports = { validate, webUserValidation }