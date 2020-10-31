const express=require('express');
const bodyParser=require('body-parser');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
const app=express();
const port=3000;


// session 설정
const options=require('./model/database');
app.use(session({
  // sid : 남들이 알아볼 수 없는 이상한 값으로  넣어주는 것
  secret: 'keyboard cat',
  // 접속 할 때마다 sid를 새로 발급하지 말아라
  resave: false,
  // 세션을 실제로 사용하기 전 까지는 sid를 발급하지 말아라
  saveUninitialized: true,
  store: new MySQLStore(options)
}));

app.set('views', './views');
app.set('view engine', 'ejs');
app.locals.pretty=true;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

const indexRouter=require('./routes/index');
app.use('/index', indexRouter);

const signinRouter=require('./routes/signin');
app.use('/signin', signinRouter);

const signupRouter=require('./routes/signup');
app.use('/signup', signupRouter);

const logoutRouter=require('./routes/logout');
app.use('/logout', logoutRouter);

app.listen(port, (req, res)=>{
    console.log('connected express server');
});