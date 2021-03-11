import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

import QRCodeThing from './components/qrCodeThing'


const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <QRCodeThing />
    </QueryClientProvider >
  );
}

export default App;
