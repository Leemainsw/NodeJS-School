const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const format = require('date-format');
const moment=require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');
const date=moment().format('YYYY-MM-DD HH:mm:ss');

const app = express();
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
});

conn.connect();

if(conn) {
    console.log('mysql db connected');
}
else {
    console.log('mysql db error');
}

const port = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}))

app.set('views', './views');
app.set('view engine', 'ejs');
app.locals.pretty = true;

// 객체 생성
let sql = {
    insert : 'INSERT INTO todo(content) values(?);',
    list: 'select * from todo order by id desc',
    update: 'update todo set ? = value where id=(?)',
    delete: 'delete from todo where id=(?)'
}

app.get('/todo', (req, res)=>{
    //1. 테이블에서 데이터 가져오기
    //2. index.ejs로 넘기기

    var _list;

    conn.query(sql.list, (err, rows)=>
    {
        if(err) 
        {
            console.log(err);
            return;
        }
        else
        {
            _list = rows;
            // res.render('index', {title:'TODO list'});
            res.render('index', {docs: rows, title:'TODO list'});
        }
    })
})

app.post('/todo', (req, res)=>{
    const _conn = req.body.content;
    conn.query(sql.insert, [_conn], (err)=>{
        if(err){
            console.log(err);
            return;
        }
        else
        {
            console.log('Inserted');
            res.redirect('/todo');
        }
    })
})

app.post('/delete/:id', (req, res)=>{
    var _id = req.params.id;

    conn.query(sql.delete, [_id], (err)=>{
        if(err){
            console.log(err);
            return;
        }
        else
        {
            console.log('Deleted');
            res.redirect('/todo');
        }
    })
});

app.get('/', (req, res)=>{
    res.send('<h1>Hi doodles</h1>');
})

app.listen(port, (req, res)=>{
    console.log('Connected express server at localhost');
})