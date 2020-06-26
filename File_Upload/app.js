const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const multer = require('multer')
const upload = multer({dest: 'Uploads/'})
const port = 3000;

app.set('views', './views')
app.set('view engine', 'pug')
app.locals.pretty = true;

app.get('/', (req, res)=>{
    res.render('new');
})

// app.post('/Upload', (req,res)=>{
//     res.send('<h1>Post</h1>');
//     console.log("post upload");
// })

app.post('/Upload', upload.single('userfile'), function(req, res, text){
    res.send(req.file);
})

app.listen(port, (req, res)=>{
    console.log('Connected Express Server');
})