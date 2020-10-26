import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from '../img/spinner.svg';
import {PDFDownloadLink} from '@react-pdf/renderer';
import DummyPDF from './DummyPDF';

const Entries = () => {
  const [data, setData] = useState({ responseData: [] });
  const fetchData = async () => {
    try {
      const response = await axios.get("/fetchData/");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  const deleteHandler = async(e,id) =>{
    const body ={id};
    const config = {
      headers:{
        'Content-Type':'application/json'
      }
    };
    try{
      const response = await axios.post("/deleteEntry",body,config);
      console.log(response);
      // setData({...data,responseData});
      // console.log(responseData);
      fetchData().then((responseData) => setData({ ...data, responseData }));
      alert('Entry Deleted');
      window.location.reload(false);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData().then((responseData) => setData({ ...data, responseData }));
  }, []);

  return (
    <div className="entries">
      <div className="entriesHeader">
        <span>Date</span>
        <span>Trip ID</span>
        <span>Bill Type</span>
        <span>Name</span>
        <span>Total Freight</span>
        <span>Balance</span>
        <span>Download</span>
        <span>DELETE</span>
      </div>
      {data.responseData.length === 0 ? (
        <div>
          <img style={{width:"100%",height:"300px"}} src={Spinner} alt="spinner" />
        </div>
      ) : (
        data.responseData.map((eachInfo) => {
          return (
            <div key={eachInfo._id} className="entryRow">
              <span>{eachInfo.date}</span>
              <span>{eachInfo.tripId}</span>
              <span>{eachInfo.accountToPay}</span>
              <span>{eachInfo.name}</span>
              <span>{eachInfo.totalFreight}</span>
              <span>{eachInfo.balance}</span>
              <span>
              <PDFDownloadLink document={<DummyPDF eachInfo={eachInfo} />} fileName="document.pdf">
                Download Now!
              </PDFDownloadLink>
              </span>
              <span><button onClick={e => deleteHandler(e,eachInfo._id)}>Delete</button></span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Entries;
