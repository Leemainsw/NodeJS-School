const express = require('express');
const session = require('express-session');
const app = express();
const port = 3004;
const indexRouter = require('./routs/index');

const user={
    username : 'kim',
    password : '1111',
    displayName : 'WISH'
};

app.use('/', indexRouter);

app.listen(port, (req, res)=>{
    console.log('Connected Express Server');
})