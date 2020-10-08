const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const conn=mysql.createConnection(dbconfig);

router.get('/', (req, res, next)=>{
    if(req.session.displayName){
        var page = 1;
        var sql = "SELECT * FROM board;";
        conn.query(sql, function (err, rows) {
            if (err) console.error("err : " + err);
            console.log(req.session.displayName);
            res.render('page', { rows: rows, page:page, length:rows.length-1, page_num:5, pass:true, session:req.session.displayName});
        });
    }
    else{
        res.send(`
            <script type="text/javascript">alert("로그인이 필요한 페이지입니다.");
            location.href="/login";</script>
        `);
    }
})
router.get('/:page',(req,res,next) => {

    if(req.session.displayName){
        var page = req.params.page;
        var sql = "SELECT * FROM board;";
        conn.query(sql, function (err, rows) {
            if (err) console.error("err : " + err);
            res.render('page', { rows: rows, page:page, length:rows.length-1, page_num:5, pass:true, session:req.session.displayName});
        });
    }
    else 
    {
        res.send(`
            <script type="text/javascript">alert("로그인이 필요한 페이지입니다.");
            location.href="/login";</script>
        `);
    }
});

module.exports=router;