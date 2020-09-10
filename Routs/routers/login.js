const express=require('express');
const router=express.Router();

router.get('/list', (req, res)=>{
    res.send('<h1>Hi login list!</h1>')
})

router.get('/new', (req, res)=>{
    res.send('<h1>Hi login new!</h1>')
})

module.exports=router;