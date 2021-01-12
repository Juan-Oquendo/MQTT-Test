require('dotenv').config();

const app = require('./app');
require('./mongoDB');
require('./connection');

app.listen(app.get('port'), () => {
    console.log('Server start', app.get('port'));
})