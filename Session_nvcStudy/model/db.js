const express = require('express');
const app = express();
const session = require('express-session');
const mysql = require('mysql');
var MySQLStore = require('express-mysql-session')(session);

var options = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
};

const user={
    username : 'kim',
    password : '1111',
    displayName : 'WISH'
};

const conn={
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
}

app.use(session({
    // sid : 남들이 알아볼 수 없는 이상한 값으로  넣어주는 것
  secret: 'keyboard cat',
  // 접속 할 때마다 sid를 새로 발급하지 말아라
  resave: false,
  // 세션을 실제로 사용하기 전 까지는 sid를 발급하지 말아라
  saveUninitialized: true,

  store: new MySQLStore(options)
}))


// 모듈 내보내기
module.exports=conn;