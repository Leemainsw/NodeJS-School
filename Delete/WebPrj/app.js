const express = require('express');
const app = express();
const fs = require("fs");   
const port = 3000;

app.set("views", "./views");
app.set('view engine', 'pug');
app.locals.pretty = true;

let time = Date();

app.get('/sss', (req, res)=>{
    fs.readdir('./data', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        //res.send('Dir 읽어옴');
        //res.render('view');
        res.render('view.pug',{
            _list : result
        });
    })
})

app.get('/sss/new', (req, res)=>{
    res.render('new');
})

app.post('/sss/new', (req, res) => {
    
})

app.get('/', (req, res)=>{
    res.render('test',{
        _time: time
    })
})

app.listen(port, (res,req) => {
    console.log('Connected express server at localhost');
})