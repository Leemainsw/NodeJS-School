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

router.get('/edit/:id', (req, res)=>{
    const _id = req.params.id;
    conn.query(sql.edit, [_id], (err, rows)=>{
        if(err)
        {
            console.log(err); 
            return;
        }
        else{
            res.render('edit', {data:rows[0]}); 
        }
    })
})

router.post('/edit/:id', (req, res)=>{
    const _id = req.params.id;
    const _content = req.body.content;

    conn.query(sql.update, [_content, _id], (err)=>{
        if(err)
            console.log(err);
        else
            console.log('Updated');

        res.redirect('/todo');
    });

    // update query 사용
    // 테이블도 수정되어야 함
    // 리스트 보이게 redirect
})

module.exports=router;