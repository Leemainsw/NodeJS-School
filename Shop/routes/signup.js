const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const conn=mysql.createConnection(dbconfig);

const sql={
    insert: 'INSERT INTO user(user_id, user_name, user_address, user_password, user_email, user_tel) VALUES (?);'
}

router.post('/', (req, res)=>{
    const _name = req.body.signup_name;
    const _address = req.body.signup_address;
    const _id = req.body.signup_id;
    const _password = req.body.signup_pw;
    const _email = req.body.signup_email;
    const _tel = req.body.signup_tel;

    const input = [_id, _name, _address, _password, _email, _tel];

    conn.query(sql.insert, [input], (err)=>{
        if(err){console.log(err);}
        else{console.log('Inserted!');}
    });

    res.redirect('/signin');
});

module.exports=router;