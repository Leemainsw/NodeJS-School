const express = require('express');
const app = express();
const port = 3000;

app.use((req,res,next)=>{
    console.log('미들웨어 호출됨');
    let userAgent = req.header('User-Agent');
    res.send('당신이 접속한 기기는 : ' + userAgent + '입니다.');
    console.dir(req.header);
    console.log(req.header);
})



app.listen(port, (res, req)=>{
    console.log('Connected express Server....~');
})