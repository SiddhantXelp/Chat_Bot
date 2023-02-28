<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ThemeProvider} from "./components/themeContext"
import { store } from '../src/store/store'
import { Provider } from 'react-redux'
=======
import "./index.css";
>>>>>>> 16cdb631dccb871207f4597707a2253a64344a50

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./components/themeContext";
import { store } from "../src/redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </Provider>

  // </React.StrictMode>,
);
