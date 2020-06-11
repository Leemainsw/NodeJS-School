const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
//정적인 파일이 들어갈 디렉토리를 지정하는데 public으로 지정

app.get("/static", (req, res)=>{
    res.redirect(`static.html`);
})

app.get('/dynamic', (req, res)=>{
    let list = '';
    for(let i=0; i<5; i++){
        list = list+'<li>coding</li>';
    }

    let time = new Date();
    let time2 = Date();
    let output = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dynamic</title>
        </head>
        <body>
            Hello, Dynamic!!!<br>
            ${time.getHours()} 시
            ${time.getMinutes()} 분
            ${time.getSeconds()} 초
            <br>
            ${time2}
            
            <ul>
                ${list}
            </ul>
        </body>
        </html>
`;
    res.send(output);
})

app.listen(port, (req, res)=>{
    console.log('connected express server');
})