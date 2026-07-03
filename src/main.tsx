import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { ProfileProvider } from './context/ProfileContext';
import { ProgressProvider } from './context/ProgressContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ProfileProvider>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </ProfileProvider>
  </BrowserRouter>
);