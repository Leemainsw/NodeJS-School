const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

app.get('/',(req, res)=>{
    res.send("Hello Node");
})

const list = [
    'nodeJS js...',
    'npm is...',
    'Express is...'
];

// 데이터를 key - value 형식으로 인코딩 해주는
app.use(bodyParser.urlencoded({ 
    extended: false 
}))

//list로 라우팅 했을 때 nodeJS, npm, express로 하이퍼링크 걸어
app.get('/list', (req, res) =>{
    const output = `
        <a href="localhost:3000/list?id=0">NodeJs</a>
        <br>
        <a href="localhost:3000/list?id=1">Npm</a>
        <br>
        <a href="localhost:3000/list?id=2">Express</a>
        <br>
        <br>
        <p>${list[req.query.id]}</p>
        `;
    console.log(req.query.id);
    res.send(output);   
});


app.get('/test' , (req, res)=>{
    //localhost:3000/?name = kim&password=30
    const name = req.query.name;
    const age  = req.query.age;
    var output =
    `
        name = ${name} , age = ${age} 
        <br>
        이름은 ${name}이고 , 나이는 ${age} 입니다.
    `
    res.send(output)
})


//3. post
app.get('/test2', (req, res)=>{
    const form = `
        <form method = "post" action='/test2'>
            <input type="text" placeholder="아이디를 입력하세요" name="id"><br><br>
            <input type="password" placeholder="비밀번호를 입력하세요" name="password"><br><br>
            <button type="submit">입력하기</button><br>
        </form>
    `

    res.send(form);
})

app.post('/test2', (req, res)=>{
    const id = req.body.id;
    const password = req.body.password;
    const output = `입력하신 아이디는 ${id}이고 입력하신 비밀번호는 ${password}입니다.`
    res.send(output)
})

//2
app.get('/test/:id', (req, res)=>{
    //http://localhost:3000/test/lee
    const id = req.params.id;
    output = `ID는 ${id}입니다.`;
    res.send(output);
})

app.listen(port, (req, res)=>{
    console.log("Connected express server at localhost'");
})