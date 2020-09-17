const e = require('express');
const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../model/database');
const conn=mysql.createConnection(dbconfig);

const sql={
    select: 'SELECT * FROM board;',
    list: 'SELECT * FROM board WHERE id=(?)'
}

router.get('/', (req, res)=>{
    if(req.session.displayName){
        conn.query(sql.select, (err, result)=>{
            if(err) {console.log(err);}
            else res.render('list', {docs: result});
        })
    }
    else 
    {
        res.send(`
            <script type="text/javascript">alert("로그인이 필요한 페이지입니다.");
            location.href="/login";</script>
        `);
    }
})

router.get('/:id', (req, res)=>{
    const _id = req.params.id;
    conn.query(sql.list, [_id], (err, rows)=>{
        if(err) console.log(err);
        else console.log('Listed');
        
        const _title = rows[0].title;
        const _content = rows[0].content;
    
        res.render('list_content', {title: _title, content: _content})
    })
})

module.exports=router;