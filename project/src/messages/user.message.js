userMessages = {}

const language = process.env.LANGUAGE;

userMessages.registered = language == 'spanish' ? 'El usuario se registro correctamente' : 'The user was registered successfully';

userMessages.emailExist = language == 'spanish' ? 'El correo ya se encuentra registrado' : 'The email has already been taken';

userMessages.emailOrPassIncorrect = language == 'spanish' ? 'El correo o la contraseña son incorrectos' : 'The email or password are incorrect';



module.exports = userMessages;