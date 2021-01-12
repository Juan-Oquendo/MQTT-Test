const language = process.env.LANGUAGE;

Success = {

    logIn: {
        status: 200,
        message: language == 'spanish' ? 'Acceso exitoso' : 'Successful login'
    },

    registered: {
        status: 200,
        message: language == 'spanish' ? 'El usuario se registro correctamente' : 'The user was registered successfully'
    }


}

module.exports = Success;