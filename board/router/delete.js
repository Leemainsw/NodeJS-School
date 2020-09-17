const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const conn=mysql.createConnection(dbconfig);

const sql={
    delete: 'DELETE FROM board WHERE id=(?);'
}

router.post('/:id', (req, res)=>{
    const _id = req.params.id;

    conn.query(sql.delete, [_id], (err)=>{
        if(err)console.log(err);
        else console.log('Deleted');
    })

    res.redirect('/login');
});

router.get('/', (req, res)=>{
     res.render('login');
})

module.exports=router;