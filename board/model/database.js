const mysql=require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'test'
})


const sql = {
    insert : 'INSERT INTO join_t(userid, user_name, displayName, user_password, title, content, email, tel, w_date, hit) values(?);',
    list : 'SELECT * FROM join_t order by id desc',
    update: 'UPDATE join_t SET userid = ?, passwd = ?, username = ?, email = ?, tel = ? WHERE id=(?)',
    delete: 'DELETE FROM join_t where id=(?)'
}

// 모듈 내보내기
module.exports=conn;
module.exports=sql;