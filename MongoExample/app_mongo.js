const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const port = 3000;
const url = "mongodb://localhost:27071";
const dbname = "test";

let db; // 데이터베이스 객체를 가리킬 변수
let login;  // Collection(table)을 가르키는 변수

MongoClient.connect(url, (err, client)=>{
    if(err) console.log(err);
    else
    {
        console.log('Connected to Mongo DB Server');
        db = client.db(dbname); //db 생성
        login = db.collection('login'); // 테이블 생성
    }
})

app.get('/' , (req, res)=>{
    res.send(" <h1>MongoDB Connection</h1>");
})

app.use(bodyParser.urlencoded({
    extended : true
}))

app.listen(port, (req, res)=>{
    console.log('Connected Express Server');
})