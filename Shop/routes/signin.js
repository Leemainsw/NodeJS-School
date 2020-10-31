const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const conn=mysql.createConnection(dbconfig);

const sql={
    select: 'SELECT * FROM user WHERE user_id=(?);'
}

router.get('/', (req, res)=>{
    res.render('signin');
});

router.post('/', (req, res)=>{
    const _id = req.body.login_userid;
    const _password = req.body.login_userpw;

    conn.query(sql.select, [_id] , (err, row)=>{
        if(err) {
            console.log(err);
            res.send(`
            <script type="text/javascript">
                alert(${err.sqlMessage}); 
                location.href="/signin";
            </script>`);
        }
        else {
            if(row[0].user_password == _password){   
                req.session.user_name = _id;
                res.render('index', {name : req.session.user_name})
                
            }
            else
            {
                res.send(`
                <script type="text/javascript">
                    alert('비밀번호가 맞지 않습니다.'); 
                    location.href="/signin";
                </script>`);
            }
        }
    })
});

module.exports=router;