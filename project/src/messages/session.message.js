sessionMessages = {}

const language = process.env.LANGUAGE;

sessionMessages.sessionDontExist = language == 'spanish' ? 'La sesion no existe' : 'The session does not exist';


module.exports = sessionMessages;