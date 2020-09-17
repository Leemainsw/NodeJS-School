const express=require('express');
const { Router } = require('express');
const router=express.Router();
const bodyParser = require('body-parser');
const session = require('express-session');
const port=3004;

const user={
    username : 'kim',
    password : '1111',
    displayName : 'WISH'
};

router.use(bodyParser.urlencoded({
    extended: false
}))

router.get('login', (req, res)=>{
    console.log('login!');
})

router.get('/temp', (req, res)=>{
    res.send('temp!');
})

router.get('/welcome', (req, res)=>{
    res.send('welcome!');
})

router.get('/welcome', (req, res)=>{
    if(req.session.displayName){
        res.send(`<h1>${req.session.displayName}님 반갑습니다!</h1> <a href="/logout">Logout</a>`);
    }else{
        res.send(`<h1>Welcome</h1> <a href="/login">LogoIn</a>`);
    }
})

router.get('/logout', (req, res)=>{
    delete req.session.displayName;
    res.redirect('/login');
})

router.get('/login', (req, res)=>{
    let output = `
    <form method='post' actiond ='/login'>
        <p><input type ='text' name = 'username' placeholder='회원이름'></p>
        <p><input type="password" name='passwd' placeholder="회원비밀번호"></p>
        <p><button type="submit">로그인</button></p>
    </form>
    `
    res.send(output);
})

router.post('/login', (req, res)=>{
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

router.use(bodyParser.urlencoded({
    extended: false
}))


router.get('/welcome', (req, res)=>{
    if(req.session.displayName){
        res.send(`<h1>${req.session.displayName}님 반갑습니다!</h1> <a href="/logout">Logout</a>`);
    }else{
        res.send(`<h1>Welcome</h1> <a href="/login">LogoIn</a>`);
    }
})

router.get('/logout', (req, res)=>{
    delete req.session.displayName;
    res.redirect('/login');
})

router.get('/login', (req, res)=>{
    let output = `
    <form method='post' actiond ='/login'>
        <p><input type ='text' name = 'username' placeholder='회원이름'></p>
        <p><input type="password" name='passwd' placeholder="회원비밀번호"></p>
        <p><button type="submit">로그인</button></p>
    </form>
    `
    res.send(output);
})

router.post('/login', (req, res)=>{
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

router.get('/', (req, res)=>{
    res.send('<h1>Hi Session!</h1>')
})
// 모듈 내보내기
module.exports=router;

