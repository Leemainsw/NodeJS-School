const express = require('express');
const fs = require('fs');
const app = express();
const bodyparser = require('body-parser');
const { render } = require('pug');
const port = 3000;


app.set('views', './views')
app.set('view engine', 'pug')
app.locals.pretty = true;

app.use(bodyparser.urlencoded({
    exrended: false
}))

app.get('/subject', (req, res)=>{
    fs.readdir('./data', (err, files)=>{
        if(err)console.log(err);
        console.log("정상처리 되었습니다!");
    
        res.render('view', {
            title: 'Welcome',
            docs: files
        });
    })
})

app.get('/subject/new', (req, res)=>{
    fs.readdir('./data', (err, files)=>{
        if(err)console.log(err);
        console.log("정상처리 되었습니다!");
    
        res.render('new', {
            title: 'Welcome',
            docs: files
        });
    })
})

app.get('/subject/:topic', (req, res)=>{
    const topic = req.params.topic;
    // 파일 내용을 읽어온다. readFile
    fs.readFile('./data/'+topic, (err, data)=>{
        if(err) throw err;
        fs.readdir('./data', (err, files)=>{
            if(err)console.log(err);
            console.log("정상처리 되었습니다!");
        
            res.render('view', {
                title: 'Welcome',
                docs: files,
                _FileData : data,
                _topic : topic
            });
        })
        console.log(data);
    })
    // Render 
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

    // //3
    // // const a=req.body;
    // // const _title = a.title;
    // // const _desc = a.desc;
    // const output = 
    // `
    //     <h2>${data._title}</h2>
    //     <p>${data._desc}</p>
    // `
    
    fs.writeFile('./data/' + data._title  , data._desc ,(err) =>{
        console.log('/data' + data._title);
        if(err){
            console.log(err);
        } 
        console.log("정상적으로 등록되었습니다.");
        // /subject로 리다이렉스 시키기
         res.redirect('/subject');
    })

})

app.listen(port, (req, res)=>{
    console.log("Connect Express Server");
})

// view pug로를 만들고
// new 클릭하면 
// title/ description new.pug 만들기
// new 링크는 : http://localhost:3000/subject/new