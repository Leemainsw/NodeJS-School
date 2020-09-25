const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const conn=mysql.createConnection(dbconfig);

const sql={
    searchName: 'SELECT * FROM board WHERE username=(?)',
    searchTitle: 'SELECT * FROM board WHERE title=(?)'
}

router.post('/',(req,res) => {

    var page = 1;
    var select = req.body.select;

    if(req.session.displayName){
        if(select == "title")
        {
            var title = req.body.searchText;
            conn.query(sql.searchTitle, [title], function (err, rows) {
                if (err) console.error("err : " + err);
                res.render('page', { rows: rows, page:page, length:rows.length-1, page_num:5, pass:true});
            });
        }
        else if (select == "writer")
        {
            var writer = req.body.searchText;
            conn.query(sql.searchName, [writer], function (err, rows) {
                if (err) console.error("err : " + err);
                res.render('page', { rows: rows, page:page, length:rows.length-1, page_num:5, pass:true});
            });
        }
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