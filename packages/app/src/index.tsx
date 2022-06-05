import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import { makeServer, queryClient } from 'services/infra';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
if (process.env.REACT_APP_NODE_ENV !== 'production') makeServer();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
        <ReactQueryDevtools />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
