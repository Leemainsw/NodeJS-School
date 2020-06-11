//express web serber 만들기

// 1. app.get('/register', cb);
// 2. app.get('/register/:name', cb);
// 3. app.post('/register', cb);

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(3003, (req, res)=>{
    console.log('conected express web server...');
});

app.use(bodyParser.urlencoded({
    exrended: false
}))

app.get('/register', (req, res)=>{
    //localhost:3000/register?a=30&b=20&c=lee
    const a = req.query.a;
    const b = req.query.b;
    const c = req.query.c;

    const output = `
    <p>A : ${a}</p>
    <p>B : ${b}</p>
    <p>C : ${c}</p>
    `;
    res.send(output);
})

app.get('/register/:name', (req, res)=>{
    //localhost:3003/register/lee
    const output = 
    `
        <p>name : ${req.params.name}</p>
    `
    res.send(output);
})

app.get('/registerPost', (req, res)=>{
    const output = 
    `
        <form method = "post" action='/registerPost'>
            <input type="text" placeholder="아이디를 입력하세요" name="id"><br><br>
            <button type="submit">입력하기</button><br>
        </form>
    `;

    res.send(output);
})

app.post('/registerPost', (req, res)=>{
    //localhost:3003
    const id = req.body.id;
    const output = `${id}`;
    res.send(output);
})

