const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3004;

const router=require('./routers/index');
app.use('/', router);

const router1=require('./routers/todo');
app.use('/', router1);

const router2=require('./routers/delete');
app.use('/', router2);

const router3=require('./routers/edit');
app.use('/', router3);


app.use(bodyParser.urlencoded({
    extended: false
}))

app.set('views', './views');
app.set('view engine', 'ejs');
app.locals.pretty = true;

app.listen(port, (req, res)=>{
    console.log('Connected express server at localhost');
})