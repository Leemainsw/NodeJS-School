const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/test"; //test : db이름

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(url);

let db = mongoose.connection;

// 2. 스키마 설정
const person = mongoose.Schema({
    name : 'string',
    age : 'number',
    addr : 'string'
})

// 3. 모델 생성
const Student = mongoose.set('student', person);
                                // collection 이름, 스키마
const person2 = mongoose.model('abs', person);

db.once('open', ()=>{
    console.log('DB connected');
})

db.on('error', (err)=>{
    console.log('DB connected');
})
