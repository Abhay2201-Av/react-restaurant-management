import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux"; 
import store from './components/redux/store.jsx';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  <Provider store={store}>
    <App />
    <Toaster 
    position="bottom-center"
    toastOptions={{
    className: '',
    style: {
      fontSize:'15px',
      padding: '16px',
      color: '#000',
      textTransform:"capitalize"
    },}}/>
  </Provider>
  </BrowserRouter>
  </>,
)
