import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContextProvider from "./context/toastContext";
import { initialState, toastReducer } from "./reducer/toastReducer";
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider initialState={initialState} reducer={toastReducer}>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
