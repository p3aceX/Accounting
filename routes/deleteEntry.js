const express = require('express');
const router = express.Router();
const InvoiceSubmit =  require('../model/InvoiceSubmit'); // mongoose model

router.post('/',async(req,res)=>{
    try{
        const entry = await InvoiceSubmit.findById(req.body.id);
        const response = await entry.remove();
        console.log('Removed');
        res.json(response);
        
    }catch(err){
        console.log(err);
        res.send('Server Error');
    }
})


module.exports = router;