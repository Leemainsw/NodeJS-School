const express=require('express');
const app=express();
const port=3000;

// 가져오기
const listRouter = require('./router/list');
app.use('/list', listRouter);

const writeRouter = require('./router/write');
app.use('/write', writeRouter);

app.set('views', './views');
app.set('view engine', 'ejs');
app.locals.pretty = true;

app.listen(port, (req, res)=>{
    console.log('connected express server');
})