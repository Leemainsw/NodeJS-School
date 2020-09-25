const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const session = require('express-session');
const conn=mysql.createConnection(dbconfig);

const sql={
    select: 'SELECT * FROM user WHERE username=(?);'
}

router.post('/', (req, res)=>{
    const _id = req.body.userid;
    const _password =req.body.userpw;
    conn.query(sql.select, [_id], (err, rows)=>{
        if(err) {
            console.log(err); 
            if(err.sqlMessage == 'Query was empty'){res.send(`<script type="text/javascript">alert("해당하는 계정이 없습니다."); location.href="/login";</script>`)};
        }
        else {
            if(rows[0].password == _password)
            {
                console.log('user CHK');  
                req.session.displayName = rows[0].displayName;
                req.session.userName = rows[0].username;
                req.session.save(function(){
                    res.send(`<script type="text/javascript">alert("로그인 성공!"); location.href="/page";</script>`)
                });

            }
            else 
            {
                res.send(`<script type="text/javascript">alert("비밀번호가 맞지 않습니다."); location.href="/login";</script>`)
            }
        };
    })
});

router.get('/', (req, res)=>{   
    res.render('login');
})

module.exports=router;