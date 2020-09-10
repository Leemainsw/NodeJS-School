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

router.post('/delete/:id', (req, res)=>{
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

module.exports=router;