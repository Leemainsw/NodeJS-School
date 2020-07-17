const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/test";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({eextended: false}))

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

app.use(bodyParser.urlencoded({
    exrended: false
}))

app.set('views', './views')
app.set('view engine', 'pug')
app.locals.pretty = true;

mongoose.connect(url);
let db = mongoose.connection;

db.once('open', ()=>{
    console.log("mongodb Connected");
})

db.on('err', (err)=>{
    console.log('mongodb connect err')
})

//스키마 생성
const person = mongoose.Schema({
    name: {type : String, required: true, unique:true},
    age: 'number',
    addr: 'string'
})

//모델생성
const Student = mongoose.model('student', person);

app.get('/', (req,res)=>{
    console.log('hi root');
})

app.get('/new', (req,res)=>{
    res.render('new');
})

app.post('/new', (req, res)=>{
    var _name = req.body.name;
    var _age = req.body.age;
    var _addr = req.body.addr;

    console.log(_name, _age, _addr);

    //데이터 추가
    let data = new Student({name : _name, age : _age, addr:_addr});
    data.save((err, docs)=>{
        if(err) console.log(err);
        else
        {
            console.log('Saved');
            res.redirect('/');
        }
    })
})

app.listen(port, (req, res)=>{
    console.log("connected");
})