const express = require('express');
const app = express();
const port = 3000;

//template 파일이 저장될 디렉토리 지정
app.set('views', './views');
//이쁘게 나오기
app.locals.pretty = true;
//사용할 템플릿 엔진 설정
app.set('view engine', 'pug');

//정적인 파일이 들어갈 디렉토리를 지정하는데 public으로 지정
app.use(express.static('public'));

app.get("/static", (req, res)=>{
    res.redirect(`static.html`);
})

app.get('/template', (req, res)=>{
    let time = Date();
    res.render('camp.pug',{
        ti : time,
        _title : "퍼그"
    });
})

app.listen(port, (req, res)=>{
    console.log('connected express server');
})