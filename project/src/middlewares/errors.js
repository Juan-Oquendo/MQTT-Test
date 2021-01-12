const middleware = (error, req, res, next) => {
    let errorToJson;
    if (typeof error.errorObject === 'function') {
        errorToJson = error.errorObject();
    } else {
        errorToJson = {
            status: 500,
            name: 'UnkwnownError',
            message: 'Unkwnown Error',
        }
    }
    res.status(errorToJson.status).json(errorToJson);

};

module.exports = middleware;