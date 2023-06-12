const middleware = {}

middleware.author = async (req, res, next) => {
    req.author = {
        "name": "joshe",
        "lastname": "ramirez"
    }

    next();
}

// middleware.errorHandler = () => {
//     return (err, req, res, next) => {
//       return res
//         .status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
//         .json(err);
//     };
//   };

module.exports = middleware