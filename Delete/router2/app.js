const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.set("views", './views');
app.set("view engine", 'pug');
app.locals.pretty = true;

app.use(bodyParser.urlencoded({
    exrended: false
}))

const list = [
    'nodeJS',
    'Npm',
    'Express'
];

app.get('/new', (req, res)=>{   

    res.render('new.pug',{
        _list : list,
        _title : "퍼그"
    });
})

app.post('/new', (req, res)=>{
    res.send('')
})


app.listen(port, (req, res)=>{
        console.log('connected express server at localhost');
})