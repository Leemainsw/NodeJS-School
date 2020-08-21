const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { mapValues } = require('async');
const app = express();
const port = 3004;

const sql = {
    insert : 'INSERT INTO join_t(user_id, passwd, user_name, email, tel, regDate) values(?);',
    list : 'SELECT * FROM join_t order by id desc',
    update: 'UPDATE join_t SET (?) = (?) where id=(?)',
    delete: 'DELETE FROM join_t where id=)?)'
}

//views
app.use(bodyParser.urlencoded({
    extended: false
}))

app.set('views', './views');
app.set('view engine', 'ejs');
app.locals.pretty = true;

// mysql을 위한

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
})

conn.connect();

if(conn){
    console.log('Mysql Connected');
}else{
    console.log('mysql db connect error');
}

app.get('/join', (req, res)=>{
    const _id = req.params.id;
    res.render('edit_form', {id: _id});
})

app.get('/edit/:id', (req, res)=>{
    const _id = req.params.id;
    res.render('edit_form', {id: _id});
})

app.post('/edit/:id', (req, res)=>{
    const _id = req.params.id;
})

app.get('/list',(req, res)=>{
    var _list;

    conn.query(sql.list, (err, rows)=>{
        if(err){
            console.log(err);
            return;
        }else{
            _list = rows;
            res.render('list', {docs: rows});
        }
    })
});

app.get('/', (req, res)=>{
    res.send('<H1>Hello World</H1>');
})

app.listen(port, (req, res)=>{
    console.log('Server connected');
})

//1. mysql db 연동
//2. app.get(/list) 라우팅
//3. userid, username, email, hp, regDate 수정
//4. 내림차순으로 만들기