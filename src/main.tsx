import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ThemeProvider} from "./components/themeContext"
import { store } from '../src/store/store'
import { Provider } from 'react-redux'


import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  // <React.StrictMode>
  <Provider store={store}>
  <ThemeProvider>
 
    <App />
   
    </ThemeProvider>
    </Provider>

  // </React.StrictMode>,
)
