const express  = require('express');
const morgan   = require('morgan');
const redis    = require('redis');
const session  = require('express-session');

const RedisStore = require('connect-redis')(session);

const sessionMiddleware   = require('./middlewares/session');
const errorMiddleware     = require('./middlewares/errors');
const redisClient         = require('./redisDB');

// Initializations
const app = express();


// Settings

app.set('port', process.env.PORT || 3000);

// Middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    store: new RedisStore({ client: redisClient, ttl: 60 }),
    secret: 'una clave muy secreta',
    saveUninitialized: true,
    resave: false,
}));
app.use(errorMiddleware);

// Importing routes
const mqttRoutes = require('./routes/mqtt.routes');
const userRoutes = require('./routes/user.routes');


// Routes
app.use('/user', userRoutes, errorMiddleware);
app.use('/mqtt', sessionMiddleware, mqttRoutes);


module.exports = app;