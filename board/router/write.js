const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const conn=mysql.createConnection(dbconfig);

const sql={
    insert: 'INSERT INTO board(displayName, username, title, content) VALUES (?);'
}

router.post('/', (req, res)=>{
    const  _title=req.body.title;
    const  _content=req.body.content;
    const _displayname=req.session.displayName;
    const _username=req.session.userName;
    
    const inputMSG = [_displayname, _username, _title, _content];

    conn.query(sql.insert, [inputMSG], (err)=>{
        if(err)console.log(err);
        else console.log('Inserted');
    })

    res.redirect('/page');
})

router.get('/', (req, res)=>{
    res.render('write', {displayname:req.session.displayName});
})

module.exports=router;