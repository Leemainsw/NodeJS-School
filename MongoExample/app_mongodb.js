const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test'; //test는 db 이름

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(url);

let db = mongoose.connection;

const login = mongoose.Schema({
    id : 'number',
    uid : String,
    passwd : String
})

const Loginmongoose = mongoose.set('useNewUrlParser', true);

db.once('open', ()=>{
    console.log('DB Connected');
})

db.on('error', (err)=>{
    console.log('DB connection error');
})

app.listen(port, (req, res)=>{
    console.log('Connected Express Server');
})