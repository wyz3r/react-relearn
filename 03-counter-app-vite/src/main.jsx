import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";

import './styles.css';
import { CounterApp } from "./CounterApp";

import  {HelloWorldApp} from  "./HelloWorldApp"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp  title={'Hola soy vegeta'}/>
    {/* <CounterApp value={3}/> */}
  </React.StrictMode>
);
