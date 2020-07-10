const express = require('express')
const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log('express web server!');
})

app.get('/', (req, res)=>{
    res.send('hi mongo db');
})