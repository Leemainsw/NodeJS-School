const express=require('express');
const router=express.Router();

const format = require('date-format');
const moment=require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');
const date=moment().format('YYYY-MM-DD');

const sql = {
    insert : 'INSERT INTO join_t(userid, passwd, username, email, tel, regDate) values(?);',
    list : 'SELECT * FROM join_t order by id desc',
    update: 'UPDATE join_t SET userid = ?, passwd = ?, username = ?, email = ?, tel = ? WHERE id=(?)',
    delete: 'DELETE FROM join_t where id=(?)'
}

// mysql을 위한
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
});

conn.connect();

if(conn){
    console.log('Mysql Connected');
}else{
    console.log('mysql db connect error');
}

router.get('/join', (req, res)=>{
    res.render('join_form');
})

router.post('/join', (req, res)=>{
    const _userid = req.body.userid;
    const _userpw = req.body.userpw;
    const _username = req.body.username;
    const _email = req.body.email;
    const _tel = req.body.tel;
    const _text = [_userid, _userpw, _username, _email, _tel, date]
    conn.query(sql.insert, [_text], (err)=>{
        if(err) console.log(err);
        else console.log('Inserted');

        res.redirect('/list');
    })
})

router.get('/edit/:id', (req, res)=>{
    const _id = req.params.id;
    res.render('edit_form', {id: _id});
})

router.post('/edit/:id', (req, res)=>{
    const _id = req.params.id;

    const _userid = req.body.userid;
    const _userpw = req.body.userpw;
    const _username = req.body.username;
    const _email = req.body.email;
    const _tel = req.body.tel;

    conn.query(sql.update, [_userid, _userpw, _username, _email, _tel, _id], (err)=>{
        if(err){
            console.log(err);
        }
        else
            console.log('Updated');
        
        res.redirect('/list');
    })
})

router.get('/delete/:id', (req, res)=>{
    const _id = req.params.id;
    
    conn.query(sql.delete, [_id], (err)=>{
        if(err) console.log(err);
        else console.log('Deleted');
        
        res.redirect('/list');
    })
})

router.post('/delete/:id', (req, res)=>{
    const _id = req.params.id;

    const _userid = req.body.userid;
    const _userpw = req.body.userpw;
    const _username = req.body.username;
    const _email = req.body.email;
    const _tel = req.body.tel;

    conn.query(sql.update, [_userid, _userpw, _username, _email, _tel, _id], (err)=>{
        if(err){
            console.log(err);
        }
        else
            console.log('Updated');
        
        res.redirect('/list');
    })
})

router.get('/list',(req, res)=>{
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

router.get('/', (req, res)=>{
    res.send('<H1>Hello World</H1>');
    console.log(date);
})

// 모듈 내보내기
module.exports=router;
