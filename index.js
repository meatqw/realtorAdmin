const express = require("express");
const userRouter = require('./routes/user.routes');
const keysRouter = require('./routes/keys.routes');

const PORT = process.env.PORT || 8080;

const path = require('path');
const { dirname } = require("path");
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
  
// user
app.use('/api', userRouter);

// keys
app.use('/api', keysRouter);


//index
app.use(express.static(path.resolve(__dirname, 'client')))

app.listen(PORT, () => console.log("server started"));

