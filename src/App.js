import React from 'react';
import Main from './containers/Main';
import { pdfjs } from 'react-pdf';

// Configuration for PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
