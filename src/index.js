import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import reportWebVitals from './reportWebVitals';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from  './context/authContext'
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AuthContext>
  <App />
  {/* <ToastContainer /> */}

 </AuthContext>
);

reportWebVitals();
