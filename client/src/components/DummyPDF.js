import React from "react";
import {
  StyleSheet,
  View,
  Page,
  Document,
  Text,
  Image,
} from "@react-pdf/renderer";
import QR from "../img/QR.png";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "30",
    marginBottom: "0",
  },
  headerLeft: {
    fontWeight: "bold",
    fontSize: "40",
  },
  headerRight: {},
  secondLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "20",
    marginTop: "40",
  },
  thirdLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "20",
  },
  fourthLine: {
    backgroundColor: "#E5E5E5",
    borderBottomWidth: "3",
    borderBottomColor: "black",
  },
  fourthLineFirst: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "10",
    marginRight: "20",
  },
  fourthLineSecond: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "10",
    marginLeft: "40",
  },
  fifthLine: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "20",
    borderBottomWidth:"3",
    borderBottomColor:'black'
  },
  fifthLineRight: {
  },
  fifthLineRightEach:{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:"3"
  },
  fifthLineRightEachTotal:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:"3",
    borderBottomColor:'black',
    borderTopColor:'black',
    borderTopWidth:'2',
    borderBottomWidth:'2'
},
fifthLineRightEachTDS:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:"3",
    borderBottomColor:'black',
    borderBottomWidth:'2'
},
sixthLine:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:"30",
    marginTop:"0",
}

});

const DummyPDF = ({eachInfo}) => {
  return (
    <Document>
      <Page size="A4" style={styles.pageStyle}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerLeft}>Agrigator</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={{ fontSize: "20" }}>
              Anati Technologies Private Limited
            </Text>
            <Text style={{ fontSize: "22", color: "grey", marginLeft: "100" }}>
              23AASCA7157M1Z3
            </Text>
            <Text style={{ fontSize: "11", marginLeft: "120" }}>
              C-25 Rani Awanti Bai Transport Nagar
            </Text>
            <Text style={{ fontSize: "11", marginLeft: "180" }}>
              Bhopal, Madhya Pradesh
            </Text>
          </View>
        </View>

        <View style={styles.secondLine}>
          <View>
            <Text style={{padding:"4"}}>Hello,</Text>
            <Text style={{ fontSize: "23", fontWeight: "bold",padding:"4" }}>{eachInfo.name}</Text>
            <Text style={{padding:"4"}}>{eachInfo.phone}</Text>
            <Text style={{padding:"4"}}>{eachInfo.address}</Text>
          </View>
          <View>
            <Text style={{ fontSize: "20", fontWeight: "bold",padding:"4",marginLeft:"120" }}>{eachInfo.date}</Text>
            <Text style={{ fontSize: "20", fontWeight: "bold",padding:"4",marginLeft:"120" }}>
              {eachInfo.vehicleNumber}
            </Text>
            <Text style={{ fontSize: "13",padding:"4" }}><Text style={{color:"#2F4F4F"}}>Driver Name:</Text>{eachInfo.driverName}</Text>
            <Text style={{ fontSize: "13",padding:"4" }}><Text style={{color:"#2F4F4F"}}>Driver Number:</Text>{eachInfo.driverNumber}</Text>
          </View>
        </View>

        <View style={styles.thirdLine}>
          <Text style={{ color: "grey" }}><Text style={{color:"#2F4F4F",textDecoration:'underline'}}>Origin:</Text>{eachInfo.origin}</Text>
          <Text style={{ color: "grey" }}><Text style={{color:"#2F4F4F",textDecoration:'underline'}}>Destination:</Text>{eachInfo.destination}</Text>
          <View>
            <Text style={{ color: "grey" }}>{eachInfo.accountToPay}</Text>
            <Text style={{ fontSize: "14", marginLeft: "0" }}>{eachInfo.commodity}</Text>
          </View>
        </View>

        <View style={styles.fourthLine}>
          <View style={styles.fourthLineFirst}>
            <Text>Weight(MT)</Text>
            <Text>Rate(MT)</Text>
            <Text>Freight</Text>
          </View>
          <View style={styles.fourthLineSecond}>
            <Text>{eachInfo.actualWeight}</Text>
            <Text>{eachInfo.finalRate}</Text>
            <Text>{eachInfo.totalFreight}</Text>
          </View>
        </View>

        <View style={styles.fifthLine}>
          <View style={styles.fifthLineLeft}>
            <Image src={QR} style={{ width: "200", height: "200" }} />
            <Text style={{ fontSize: "15", padding: "4" }}>
              Scan or Pay using UPI
            </Text>
            <Text style={{ fontSize: "15", fontWeight: "bold", padding: "4" }}>
              agrigator@icici
            </Text>
          </View>
          <View style={styles.fifthLineRight}>
            <View style={styles.fifthLineRightEach}>
              <Text style={{marginRight:"30"}}>Cash Advance</Text>
              <Text style={{marginLeft:"30"}}>-${eachInfo.cashAdvance}</Text>
            </View>
            <View style={styles.fifthLineRightEach}>
              <Text style={{marginRight:"30"}}>Account Advance</Text>
              <Text style={{marginLeft:"30"}}>-${eachInfo.accountPayAdvance}</Text>
            </View>
            <View style={styles.fifthLineRightEachTotal}>
              <Text style={{marginRight:"30",color:"#2F4F4F"}}>Total Advance</Text>
              <Text style={{marginLeft:"30",color:"#2F4F4F"}}>-${eachInfo.totalAdvance}</Text>
            </View>
            <View style={styles.fifthLineRightEach}>
              <Text style={{marginRight:"30",color:"#2F4F4F"}}>Balance</Text>
              <Text style={{marginLeft:"30",color:"#2F4F4F"}}>${eachInfo.balance}</Text>
            </View>
            <View style={styles.fifthLineRightEach}>
              <Text style={{marginRight:"30"}}>Comission</Text>
              <Text style={{marginLeft:"30"}}>-${eachInfo.comission}</Text>
            </View>
            <View style={styles.fifthLineRightEach}>
              <Text style={{marginRight:"30"}}>Detention</Text>
              <Text style={{marginLeft:"30"}}>-${eachInfo.detention}</Text>
            </View>
            <View style={styles.fifthLineRightEach}>
              <Text style={{marginRight:"30"}}>Other Charges</Text>
              <Text style={{marginLeft:"30"}}>-${eachInfo.otherCharges}</Text>
            </View>
            <View style={styles.fifthLineRightEach}>
              <Text style={{marginRight:"30"}}>Discounts</Text>
              <Text style={{marginLeft:"30"}}>-${eachInfo.discount}</Text>
            </View>
            <View style={styles.fifthLineRightEachTDS}>
              <Text style={{marginRight:"30"}}>TDS</Text>
              <Text style={{marginLeft:"30"}}>-${eachInfo.tds}</Text>
            </View>
            <View style={styles.fifthLineRightEach}>
              <Text style={{marginRight:"30",color:"#2F4F4F"}}>Total Balance</Text>
              <Text style={{marginLeft:"30",color:"#2F4F4F"}}>${eachInfo.finalBalance}</Text>
            </View>
          </View>
        </View>

        <View style={styles.sixthLine}>
            <View style={styles.sixthLineLeft}>
                <Text style={{fontSize:"14",padding:"2"}}>Bank Name:</Text>
                <Text style={{fontSize:"14",padding:"2"}}>Account Number:</Text>
                <Text style={{fontSize:"14",padding:"2"}}>IFSC Code:</Text>
                <Text style={{fontSize:"14",padding:"2"}}>Email:</Text>
                <Text style={{fontSize:"14",padding:"2"}}>Phone:</Text>
            </View>
            <View style={styles.sizthLineRight}>
                <Text style={{fontSize:"14",marginTop:"80"}}>Office Remark</Text>
            </View>
        </View>
      </Page>
    </Document>
  );
};

export default DummyPDF;
