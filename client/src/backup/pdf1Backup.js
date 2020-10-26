import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    color:'red'
  }
});

// Create Document Component
const MyDocument = ({eachInfo}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{eachInfo.name}</Text>
      </View>
      <View style={styles.section}>
        <Text>{eachInfo.age}</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;