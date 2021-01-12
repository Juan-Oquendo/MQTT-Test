module.exports = {

    jwtSecret: process.env.JWT_SECRET,
    mqttConnectUrl: 'ws://oukemytest.ml:8093/mqtt',
    redisAUTH: process.env.REDIS_PASS,

    mongodb_options: {
        auth: { "authSource": 'admin' },
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PASS,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },

    redis_options: {
        host: process.env.REDIS_HOST,
        no_ready_check: true
    },

    mqtt_options: {
        clean: true,
        connectTimeout: 4000,
        clientId: 'web_server_' + Math.round(Math.random() * 10000),
        username: 'emqx',
        password: '980524573001475'
    }

}