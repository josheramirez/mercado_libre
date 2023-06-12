
const express = require("express");
const cors = require("cors");
const app = express();
const middleware = require('../src/middlewares/index.middleware')


// TODO
// - route invalid request
// - complete middleware to check invalid routes
// - handle error response

app.use(
    cors({
        origin:"http://localhost:3000",
    })
)

// app.use(middleware.errorHandler);

app.use(require('./routes/index.routes'))


module.exports = app