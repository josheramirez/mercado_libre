
const express = require("express");
const cors = require("cors");
const app = express();

// app.all('*')
// middleware to check invalid routes


// TODO
// - test
// - route invalid request


app.use(
    cors({
        origin:"http://localhost:3000",
    })
)
app.use((req, res, next)=>{
    console.log("middleware routes");
    next()
})

app.use(require('./routes/index.routes'))

// app.listen(4200,()=>{
//     console.log("running server in port 4200");
// })


module.exports = app