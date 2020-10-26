const express = require('express');
const router = express.Router();
const InvoiceSubmit =  require('../model/InvoiceSubmit'); // mongoose model

router.get('/',async(req,res)=>{
    try{
        const response = await InvoiceSubmit.find().sort({data:-1});
        res.json(response);
    }catch(err){
        console.log(err);
        res.send('Server Error');
    }
})


module.exports = router;