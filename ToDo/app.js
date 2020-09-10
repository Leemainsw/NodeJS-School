const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3004;

const router=require('./routers/index');
app.use('/', router);

const conn=require('./model/db');
app.use('/', conn);



app.use(bodyParser.urlencoded({
    extended: false
}))

app.set('views', './views');
app.set('view engine', 'ejs');
app.locals.pretty = true;


app.listen(port, (req, res)=>{
    console.log('Connected express server at localhost');
})