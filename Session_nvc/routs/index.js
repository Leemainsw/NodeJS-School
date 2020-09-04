const express=require('express');
const { Router } = require('express');
const router=express.Router();
const bodyParser = require('body-parser');
const port=3004;

router.use(bodyParser.urlencoded({
    extended: false
}))

router.get('welcome', (req, res)=>{
    res.send('hi welcome');
})

router.get('/login', (req, res)=>{
    res.send('hi login');
})

// 모듈 내보내기
module.exports=router;