const express=require('express');
const router=express.Router();

router.get('/', (req, res)=>{
    delete req.session.displayName;
    res.redirect('/login');
})

module.exports=router;