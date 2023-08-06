import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import RecoilRootWrapper from '@/store/recoilRoot.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRootWrapper>
      <App />
    </RecoilRootWrapper>
  </React.StrictMode>,
);
