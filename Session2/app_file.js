const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fileStore=require('session-file-store')(session);
const md5=require('md5');
const app = express();
const port = 3004;

const user={
    username : 'kim',
    password : 'b59c67bf196a4758191e42f76670ceba',
    displayName : 'WISH'
};

function sha1(pwd, salt) { return sha256(pwd+salt); }

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(session({
    // sid : 남들이 알아볼 수 없는 이상한 값으로  넣어주는 것
  secret: 'keyboard cat',
  // 접속 할 때마다 sid를 새로 발급하지 말아라
  resave: false,
  // 세션을 실제로 사용하기 전 까지는 sid를 발급하지 말아라
  saveUninitialized: true,

  store: new fileStore,
  secret: 'keyboard cat'
}))

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
        console.log('로그인');
        console.log(pw == user.password);
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