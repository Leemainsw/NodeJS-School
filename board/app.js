const express=require('express');
const app=express();
const port=3000;

// 가져오기
const indexRouter = require('./router/router');

app.use('/', indexRouter);

app.listen(port, (req, res)=>{
    console.log('connected express server');
})