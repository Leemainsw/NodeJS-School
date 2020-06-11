const express = require('express');
const app = express();
const port = 3000;

app.listen(port, (req, res)=>{
    console.log("Connected Express Server");
})

// 미들웨어 = 모듈 = 함수
// 미들웨어 : 사용자의 요청이들어오면 중간에 처리해주는 함수

app.use((req,res,next)=>{
    //req, res는 객체 (속성추가, 매서드추가) 가능
    console.log('첫번째 미들웨어 호출됨');
    req.user = 'Kim';
    next();
})


const person = {
    name: 'kim',
    age: 30
};

app.use((req, res, next) => {
    console.log("두번째 미들웨어 호출됨");
    //res.send(req.user);
    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    // res.write(`<h1>서버에서 보낸 응답</h1>`);
    // res.end();

    //person을 응답으로

    // res.send(person);
    //객체를 문자열로 변환하는 매서드
    const strPerson = JSON.stringify(person); // JSON을 문자열로 변환
    //res.send(strPerson);

    // 문자여을 json으로 바꾸는 것 : JSON.parse()
    const JsonPerson = JSON.parse(strPerson);
    //res.send(JsonPerson);

    
    res.redirect("https://www.google.com");
})
