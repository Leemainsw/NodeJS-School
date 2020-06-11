const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const port = 3000;

app.set('views', './views')
app.set('view engine', 'pug')
app.locals.pretty = true;

app.use(bodyparser.urlencoded({
    exrended: false
}))

app.get('/subject', (req, res)=>{
    res.render('view', {
        title: 'Welcome'
    });
})

app.get('/subject/new', (req, res)=>{
    res.render('new');
})

app.listen(port, (req, res)=>{
    console.log("Connect Express Server");
})

app.post('/subject/new', (req, res)=>{
    //title, desc 값 가지고 와서 _title, _desc에 대입
    //1
    // const _title = req.body.title
    // const _desc = req.body.desc

    //2
    const data = {
         _title : req.body.title,   
         _desc : req.body.desc
    }

    //3
    // const a=req.body;
    // const _title = a.title;
    // const _desc = a.desc;
    const output = 
    `
        <h2>${data._title}</h2>
        <p>${data._desc}</p>
    `
    res.send(output)
})

// view pug로를 만들고
// new 클릭하면 
// title/ description new.pug 만들기
// new 링크는 : http://localhost:3000/subject/new