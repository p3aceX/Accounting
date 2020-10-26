import React from 'react'
import {PDFViewer} from '@react-pdf/renderer';
import DummyPDF from './DummyPDF';

const PDF = () => {
    return (
        <div>
            <h4 style={{margin:"0px"}}>You can preview your pdf here</h4>
            <PDFViewer style={{width:'100%',height:"700px"}}>
                <DummyPDF />
            </PDFViewer>
        </div>
    )
}

export default PDF;
