const mongoose = require('mongoose');

const { mongodb_options } = require('./connection');

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_HOST, mongodb_options);
    } catch (error) {
        console.log(error);
    }
})();

mongoose.connection.once('open', _ => {
    console.log('Mongo connected');
});

mongoose.connection.on('error', err => {
    console.log(err);
});