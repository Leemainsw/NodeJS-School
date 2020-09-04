const express = require('express');

const indexRouter = require('./routs/index');
const indexDb = require('./model/db');

const app = express();
const port = 3004;

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'test'
// });


app.use('/', indexRouter);
app.use('/', indexDb);

app.listen(port, (req, res)=>{
    console.log('Connected Express Server');
})