const middleware = {}

middleware.author = async (req, res, next) => {
    req.author = {
        "name": "joshe",
        "lastname": "ramirez"
    }

    next();
}

module.exports = middleware