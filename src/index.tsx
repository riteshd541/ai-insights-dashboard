// index.tsx or App.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AIDataProvider } from './context/AIDataContext';

ReactDOM.render(
  <React.StrictMode>
    <AIDataProvider>
      <App />
    </AIDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
