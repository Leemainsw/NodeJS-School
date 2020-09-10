const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const conn=mysql.createConnection(dbconfig);

const sql={
    select: 'SELECT * FROM board;'
}

router.get('/', (req, res)=>{
     conn.query(sql.select, (err, result)=>{
         if(err) {console.log(err);}
         else res.render('list', {docs:result});
     })
     
})

module.exports=router;