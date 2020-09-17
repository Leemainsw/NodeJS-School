const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const conn=mysql.createConnection(dbconfig);

const sql={
    insert: 'INSERT INTO user(username, displayName, password, email, tel) VALUES (?);'
}

// Sign up
router.post('/', (req, res)=>{
    const _username = req.body.username;
    const _displayname = req.body.displayname;
    const _password = req.body.password;
    const _passwordchk = req.body.passwordchk;
    const _email = req.body.email;
    const _tel = req.body.tel;

    if(_password != _passwordchk) { res.send(`<script type="text/javascript">alert("비밀번호가 다릅니다."); location.href="/SignUp";</script>`);}

    const input = [_username, _displayname, _password, _email, _tel];


    conn.query(sql.insert, [input], (err)=>{
        if(err){console.log(err); return;}
        else {console.log('Inserted');}

        res.redirect('/login');  
    })
})

router.get('/', (req, res)=>{
    res.render('signup');
})

module.exports=router;