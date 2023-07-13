// import TopBar from "./components/top-bar/top-bar.component"
// import { Outlet } from 'react-router-dom'
import createTemplate from "./create-template"

function App() {

  return (
    <>
      {/* <TopBar /> */}
      {/* <Landing /> */}
      {/* <Outlet /> */}
    </>
  )
}

export default App

// import React from 'react';
// import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
// // import { saveAs } from 'file-saver'
// import { saveAs } from 'file-saver';

// // Define styles for the PDF
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   },
//   image: {
//     width: '100%',
//     height: 'auto'
//   },
//   text: {
//     marginBottom: 10
//   }
// });

// // Define the content for the PDF
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text style={styles.text}>Hello, this is a sample PDF document.</Text>
//         <Text style={styles.text}>Here is some example text.</Text>
//       </View>
//       <View style={styles.section}>
//         <Image src="https://example.com/image.jpg" style={styles.image} />
//       </View>
//     </Page>
//   </Document>
// );

// // Create a button component to trigger PDF generation
// const GeneratePDFButton = () => {
//   const generatePDF = () => {
//     const blob = MyDocument.renderBlob();
//     saveAs(blob, 'my_document.pdf');
//   };

//   return <button onClick={generatePDF}>Generate PDF</button>;
// };

// // Render the PDF generation button
// function App() {
//   return (
//     <div className="App">
//       <h1>PDF Generator</h1>
//       <GeneratePDFButton />
//     </div>
//   );
// }

// export default App;

