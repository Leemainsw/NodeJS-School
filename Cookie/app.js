const express = require('express');
const cookieParser = require('cookie-parser');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const app = express();
const port = 3004;

app.use(cookieParser());

let count = 0;

app.get('/count', (req, res)=>{
    if(req.cookies.count){ // 여러번 접속 일 때
        count = parseInt(req.cookies.count);
    }else{
        count = 0;
    }
    res.cookie('count', count);
    console.log(req.cookies.count);
    res.send(`<h1>Count : ${req.cookies.count}</h1>`);
    // 서버가 브라우저에게 전송하는 쿠키가 count : 1이라는 것
    // 브라우저는 count = 1이라는 얘를 저장해놀자
    // 2번째 접속할 때는 count 1ㅇ이라는 애가 같이 간다.
})

app.get('/:name:pw', (req, res)=>{
    const _name = req.params.name;
    const _pw = req.params.pw;

    console.log(_name, _pw);
})

app.get('/', (req, res)=>{
    res.send('<h1>Hi Cookie</h1>')
})

app.listen(port, (req, res)=>{
    console.log('connected express server');
})