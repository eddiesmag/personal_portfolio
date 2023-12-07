import { ThemeProvider } from '@mui/material';
import React from 'react';
import { pdfjs } from 'react-pdf';

import Main from './containers/Main';
import { custTheme } from './theme/theme';

// Configuration for PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

function App() {
  return (
    <ThemeProvider theme={custTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
