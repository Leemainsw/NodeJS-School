const express = require('express');
const bodyparser = require('body-parser')
const fs = require('fs');
const app = express();
const port = 3000;

app.set('views', './views')
app.set('view engine', 'pug')
app.locals.pretty = true;

const user = {
    userid : 'kim',
    password : 1111
}
const result= '';

app.use(bodyparser.urlencoded({
    exrended: false
}))

app.get('/Login/UserList', (req, res)=>{
    fs.readdir('./data',(err, files)=>{
        if(err) console.log(err);
        res.render('UserFile',{
            user: files
        })
    })
})

app.post('/Login/RegisterForm', (req, res)=>{
    const userid = req.body.ID;
    const useremail = req.body.userEmail;
    const username = req.body.userName;
    const userpassword = req.body.PW;
    
    console.log(`userid : ${userid}, useremail : ${useremail}, username : ${username}, userpassword : ${userpassword}`);
    
    fs.writeFile('./data' + userid)
    
    res.render('RegisterForm');
})

app.get('/Login/RegisterForm', (req, res)=>{
    res.render('RegisterForm')
})

app.post('/Login/LoginForm', (req, res)=>{
    const id = req.body.ID;
    const password = req.body.PW;
    
    if(id==user.userid){
        if(password == user.password){
            res.render('LoginForm',{
                _result : "로그인 완료!"
            })
        }
        else{
            res.render('LoginForm',{
                _result : "비밀번호가 다릅니다!"
            })
        }
    }
    else{
        res.render('LoginForm',{
            _result : "아이디가 다릅니다!"
        })
    }
})

app.get('/Login/LoginForm', (req, res)=>{
    res.render('LoginForm',{
        _result : ''
    })
})

app.get('/Login', (req, res)=>{
    res.render('Login')
})

app.listen(port, (req, res)=>{
    console.log("Connected Express Server");
})

