import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ThemeProvider } from '@emotion/react';
import { rootColors } from './constants';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={{ rootColors }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
