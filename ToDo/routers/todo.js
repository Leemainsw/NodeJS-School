const express = require('express');
const router=express.Router();

const format = require('date-format');
const moment=require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');
const date=moment().format('YYYY-MM-DD HH:mm:ss');

const mysql=require('mysql');
const dbconfig=require('../model/db.js');
const conn=mysql.createConnection(dbconfig);

// 객체 생성
let sql = {
    insert : 'INSERT INTO todo(content) values(?);',
    list: 'select * from todo order by id desc',
    edit: 'select * from todo where id =(?)',
    update: 'update todo set content = (?) where id=(?)',
    delete: 'delete from todo where id=(?)'
}


router.get('/todo', (req, res)=>{
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

router.post('/todo', (req, res)=>{
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

module.exports=router;