const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
//정적인 파일이 들어갈 디렉토리를 지정하는데 public으로 지정

app.get("/static", (req, res)=>{
    res.redirect(`static.html`);
})

app.get("/login", (req, res)=>{
    res.send(`<h1>Please Login...</h1>`);
})

app.listen(port, (req, res)=>{
    console.log('connected express server');
})