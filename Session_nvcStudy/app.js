const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3004;
const indexRouter = require('./routs/index');

app.use('/', indexRouter);


app.listen(port, (req, res)=>{
    console.log('Connected Express Server');
})