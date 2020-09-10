const express=require('express');
const app=express();
const port=3000;

const router1=require('./routers/contact');
const router2=require('./routers/login');

// routing이 contact로 시작하는 애는 무조건 router1로 실행
app.use('/contact', router1);
app.use('/login', router2);


app.listen(port, (req, res)=>{
    console.log('Express Server Connected');
})