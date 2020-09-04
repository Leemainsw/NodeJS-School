const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3004;

const user={
    username : 'kim',
    password : '1111',
    displayName : 'WISH'
};

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(session({
    // sid : 남들이 알아볼 수 없는 이상한 값으로  넣어주는 것
  secret: 'keyboard cat',
  // 접속 할 때마다 sid를 새로 발급하지 말아라
  resave: false,
  // 세션을 실제로 사용하기 전 까지는 sid를 발급하지 말아라
  saveUninitialized: true
}))

app.get('login', (req, res)=>{
    console.log('login!');
})

app.get('/temp', (req, res)=>{
    res.send('temp!');
})

app.get('/welcome', (req, res)=>{
    res.send('welcome!');
})

app.get('/welcome', (req, res)=>{
    if(req.session.displayName){
        res.send(`<h1>${req.session.displayName}님 반갑습니다!</h1> <a href="/logout">Logout</a>`);
    }else{
        res.send(`<h1>Welcome</h1> <a href="/login">LogoIn</a>`);
    }
})

app.get('/logout', (req, res)=>{
    delete req.session.displayName;
    res.redirect('/login');
})

app.get('/login', (req, res)=>{
    let output = `
    <form method='post' actiond ='/login'>
        <p><input type ='text' name = 'username' placeholder='회원이름'></p>
        <p><input type="password" name='passwd' placeholder="회원비밀번호"></p>
        <p><button type="submit">로그인</button></p>
    </form>
    `
    res.send(output);
})

app.post('/login', (req, res)=>{
    const name = req.body.username;
    const pw = req.body.passwd;

    if(name == user.username &&
        pw == user.password)
    {
        req.session.displayName = user.displayName;
        res.redirect('/welcome');
    //     console.log(`${name}님, 환영합니다!`);
    //     console.log(`아이디 : ${user.name} 비밀번호 : ${user.password}`);
    }
    else
    {
        res.redirect('/login');
    }
    // 입력받은 값 가져오기
    // 확인하기
    // 맞으면 console
    // 다르면 login으로 redirect
})

app.get('/', (req, res)=>{
    res.send('<h1>Hi Session!</h1>')
})

app.listen(port, (req, res)=>{
    console.log('Connected Express Server');
})