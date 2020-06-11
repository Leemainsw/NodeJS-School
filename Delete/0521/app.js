const express = require('express');
const app = express();
const port = 3000;

//app객체로 get방식으로 접근하면 뒤에 있는 것으로 응답해준다.
app.get('/', (req, res)=>{
    res.send('Welcome NodeJS!!');
})

app.listen(port, (req, res)=>{
    console.log('connected express webserver');
})


