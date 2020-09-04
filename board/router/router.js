const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
const session=require('express-session');

//database 가져오기
const indexDatabase = require('./model/database');
app.use('/', indexDatabase);

//body parser
app.use(bodyParser.urlencoded({
    extended: false
}))

app.set('views', './views');
app.set('view engine', 'ejs');
app.locals.pretty = true;

// 로그인
// 회원가입
// 메인화면 = 리스트 / 로그인 / 회원가입 -> 로그인 되어있으면 로그아웃
// 글쓰기
// 리스트

router.get('/list', (req, res)=>{

})

router.get('/write', (req, res)=>{

})

router.get('main', (req, res)=>{

})

router.get('/signup', (req, res)=>{

})

router.get('/login', (req, res)=>{

})

router.get('/', (req, res)=>{
    res.send('<h1>>Hi Server Connected</h1');
})

// 모듈 내보내기
module.exports=router;
