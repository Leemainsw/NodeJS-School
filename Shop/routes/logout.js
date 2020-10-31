const express=require('express');
const router=express.Router();

router.get('/', (req, res)=>{
    delete req.session.user_name;
    res.redirect('/signin');
})

module.exports=router;