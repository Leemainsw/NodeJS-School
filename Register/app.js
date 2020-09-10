const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { mapValues } = require('async');
const app = express();
const port = 3004;

const indexRouter = require('./router/index');
app.use('/', indexRouter);

//views
app.use(bodyParser.urlencoded({
    extended: false
}))

app.set('views', './views');
app.set('view engine', 'ejs');
app.locals.pretty = true;


app.listen(port, (req, res)=>{
    console.log('Server connected');
})

//1. mysql db 연동
//2. app.get(/list) 라우팅
//3. userid, username, email, hp, regDate 수정
//4. 내림차순으로 만들기