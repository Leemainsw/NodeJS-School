const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const conn=mysql.createConnection(dbconfig);

// 객체 생성
let sql = {
    select: 'SELECT * FROM board;',
    edit: 'SELECT * FROM board WHERE id =(?)',
    update: 'UPDATE board SET content=(?), title=(?) WHERE id=(?)',
}

router.get('/:id', (req, res)=>{
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

router.put('/:id', (req, res)=>{
    const _id = req.params.id;
    const _content = req.body.content;
    const _title = req.body.title;

    conn.query(sql.update, [_content, _title, _id], (err)=>{
        if(err)
            console.log(err);
        else
            console.log('Updated');

        res.redirect('/list');
    });
})

module.exports=router;