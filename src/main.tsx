import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import configureStore from './redux/store';
import './index.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </StrictMode>,
)
