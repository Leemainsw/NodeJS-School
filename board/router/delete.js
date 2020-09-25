const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const conn=mysql.createConnection(dbconfig);

const sql={
    delete: 'DELETE FROM board WHERE id=(?);'
}

router.delete('/:id', (req, res)=>{
    const _id = req.params.id;

    conn.query(sql.delete, [_id], (err)=>{
        if(err)console.log(err);
        else console.log('Deleted');
    })

    res.redirect('/page');
});

router.get('/', (req, res)=>{
    res.render('page');
})

module.exports=router;