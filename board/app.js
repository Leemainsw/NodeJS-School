const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=3000;


app.set('views', './views');
app.set('view engine', 'ejs');
app.locals.pretty = true;

app.use(bodyParser.urlencoded({
    extended: false
}))

// 가져오기
const listRouter = require('./router/list');
app.use('/list', listRouter);

const writeRouter = require('./router/write');
app.use('/write', writeRouter);




app.listen(port, (req, res)=>{
    console.log('connected express server');
})