import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import * as serviceWorker from "./serviceWorker";
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
const firstChildCss = rootElement.children[0]
firstChildCss.style = "";

if (rootElement.hasChildNodes()) {
  hydrate( <BrowserRouter> <App /> </BrowserRouter> , rootElement);
} else {
  render(<BrowserRouter> <App /> </BrowserRouter> , rootElement);
} 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
