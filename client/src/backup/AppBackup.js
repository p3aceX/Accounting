import React from "react";
import MyDocument from "../pdf1";
import { PDFDownloadLink,PDFViewer } from "@react-pdf/renderer";

function App() {
  const info = [
    { name: "shadman", age: 100 },
    { name: "martin", age: 200 },
    { name: "piyal", age: 110 },
  ];
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {info.map((eachInfo) => {
            return (
              <tr>
                <td>{eachInfo.name}</td>
                <td>{eachInfo.age}</td>
                <td>
                  <PDFDownloadLink
                    document={<MyDocument eachInfo={eachInfo} />}
                    fileName="document.pdf"
                  >
                    Download PDF
                  </PDFDownloadLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
