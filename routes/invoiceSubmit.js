  
const express = require('express');
const router = express.Router();
const InvoiceSubmit =  require('../model/InvoiceSubmit'); // mongoose model

router.post('/invoiceSubmit',async(req,res)=>{
    const newInvoice = new InvoiceSubmit(req.body);
    try{
        const response = await newInvoice.save();
        res.json(response);
    }catch(err){
        console.log(err);
        res.send('Server Error');
    }
    
})


module.exports = router;