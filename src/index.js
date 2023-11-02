import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { store, persistR } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistR}>
        <BrowserRouter basename="/goit-rent-cars">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
