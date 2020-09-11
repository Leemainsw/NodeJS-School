const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const conn=mysql.createConnection(dbconfig);

const sql={
    insert: 'INSERT INTO board(displayName, password, title, content) VALUES (?);'
}

router.post('/', (req, res)=>{
    const _displayname=req.body.displayname;
    const  _title=req.body.title;
    const  _content=req.body.content;
    const _password=req.body.password;

    const inputMSG = [_displayname, _password, _title, _content];
    conn.query(sql.insert, [inputMSG], (err)=>{
        if(err)console.log(err);
        else console.log('Inserted');
    })

    res.redirect('list');
})
router.get('/', (req, res)=>{
     res.render('write');
})

module.exports=router;