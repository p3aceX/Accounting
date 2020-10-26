import React from "react";
import axios from 'axios';

const Form = () => {
    const submitHandler = async(e) =>{
        e.preventDefault();
        const date = e.target.date.value;
        const tripId = e.target.tripId.value;
        const shipperCarrier = e.target.shipperCarrier.value;
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const origin = e.target.origin.value;
        const destination = e.target.destination.value;
        const commodity = e.target.commodity.value;
        const vehicleNumber = e.target.vehicleNumber.value;
        const driverName = e.target.driverName.value;
        const driverNumber = e.target.driverNumber.value;
        const actualWeight = e.target.actualWeight.value;
        const finalRate = e.target.finalRate.value;
        const totalFreight = e.target.totalFreight.value;
        const accountToPay = e.target.accountToPay.value;
        const totalAdvance = e.target.totalAdvance.value;
        const cashAdvance = e.target.cashAdvance.value;
        const accountPayAdvance = e.target.accountPayAdvance.value;
        const otherCharges = e.target.otherCharges.value;
        const detention = e.target.detention.value;
        const discount = e.target.discount.value;
        const tds = e.target.tds.value;
        const comission = e.target.comission.value;
        const balance = e.target.balance.value;
        const finalBalance = e.target.finalBalance.value;

        const body = {
            date,tripId,shipperCarrier,name,phone,address,origin,destination,commodity,
            vehicleNumber,driverName,driverNumber,actualWeight,finalRate,totalFreight,
            accountToPay,totalAdvance,cashAdvance,accountPayAdvance,otherCharges,
            detention,discount,tds,comission,balance,finalBalance
        }
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        };
        try{
            const response = await axios.post('/submit/invoiceSubmit',JSON.stringify(body),config);
            console.log(response);
            alert('Entry Added to Database');
            window.location.reload(false);
        }catch(err){
            console.log(err);
        }
        
    }
  return (
    <div className="form">
      <form onSubmit={e => submitHandler(e)}>
        <div className="formHeader">
          <p>AgriGator Invoice System</p>
        </div>
        <div className="formFirstLine">
          <input type="text" id="date" name="date" placeholder="Date" />
          <input type="text" id="tripId" name="tripId" placeholder="Trip ID" />
          <div className="formFirstLineRadios">
            <input
              type="radio"
              id="shipper"
              name="shipperCarrier"
              value="shipper"
            />
            <label htmlFor="shipper">Shipper</label>
            <input
              type="radio"
              id="carrier"
              name="shipperCarrier"
              value="carrier"
            />
            <label htmlFor="carrier">Carrier</label>
          </div>
        </div>
        <div className="formSecondLine">
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="text" id="phone" name="phone" placeholder="Phone" />
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
          />
        </div>
        <div className="formMissingLine">
          <input type="text" id="origin" name="origin" placeholder="Origin" />
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Destination"
          />
          <input
            type="text"
            id="commodity"
            name="commodity"
            placeholder="Commodity"
          />
        </div>
        <div className="formThirdLine">
          <input
            type="text"
            id="vehicleNumber"
            name="vehicleNumber"
            placeholder="Vehicle Number"
          />
          <input
            type="text"
            id="driverName"
            name="driverName"
            placeholder="Driver Name"
          />
          <input
            type="text"
            id="driverNumber"
            name="driverNumber"
            placeholder="Driver Number"
          />
        </div>
        <div className="formFourthLine">
          <input
            type="text"
            id="actualWeight"
            name="actualWeight"
            placeholder="Actual Weight"
          />
          <input
            type="text"
            id="finalRate"
            name="finalRate"
            placeholder="Final Rate"
          />
          <input
            type="text"
            id="totalFreight"
            name="totalFreight"
            placeholder="Total Freight"
          />
        </div>
        <div className="formFifthLine">
          <input
            type="radio"
            id="accountPay"
            name="accountToPay"
            value="Account-Pay"
          />
          <label htmlFor="accountPay">Account-Pay</label>
          <input type="radio" id="toPay" name="accountToPay" value="To-Pay" />
          <label htmlFor="toPay">To-Pay</label>
        </div>

        <div className="formSixthLine">
          <input
            type="text"
            id="totalAdvance"
            name="totalAdvance"
            placeholder="Total Advance"
          />
          <input
            type="text"
            id="cashAdvance"
            name="cashAdvance"
            placeholder="Cash Advance"
          />
          <input
            type="text"
            id="accountPayAdvance"
            name="accountPayAdvance"
            placeholder="Account Pay Advance"
          />
        </div>

        <div className="formSeventhLine">
          <input
            type="text"
            id="otherCharges"
            name="otherCharges"
            placeholder="Other Charges"
          />
          <input
            type="text"
            id="detention"
            name="detention"
            placeholder="Detention"
          />
          <input
            type="text"
            id="discount"
            name="discount"
            placeholder="Discount"
          />
          <input type="text" id="tds" name="tds" placeholder="TDS" />
        </div>

        <div className="formEighthLine">
          <input
            type="text"
            id="comission"
            name="comission"
            placeholder="Comission"
          />
          <input
            type="text"
            id="balance"
            name="balance"
            placeholder="Balance"
          />
          <input
            type="text"
            id="finalBalance"
            name="finalBalance"
            placeholder="Final Balance"
          />
        </div>
        <div className="formSubmit">
          <input type="submit" value="Submit Invoice" />
        </div>
      </form>
    </div>
  );
};

export default Form;
