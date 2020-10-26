const mongoose = require('mongoose');
const InvoiceSubmitSchema = new mongoose.Schema({
    date:String,
    tripId:String,
    shipperCarrier:String,
    name:String,
    phone:String,
    address:String,
    origin:String,
    destination:String,
    commodity:String,
    vehicleNumber:String,
    driverName:String,
    driverNumber:String,
    actualWeight:String,
    finalRate:String,
    totalFreight:String,
    accountToPay:String,
    totalAdvance:String,
    cashAdvance:String,
    accountPayAdvance:String,
    otherCharges:String,
    detention:String,
    discount:String,
    tds:String,
    comission:String,
    balance:String,
    finalBalance:String
});

module.exports = InvoiceSubmit = mongoose.model('invoicesubmit',InvoiceSubmitSchema);