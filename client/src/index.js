//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import A from "./Component/A";
//import B from "./Component/B";
//import C from "./Component/C";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  //  {/* <App /> */}
  <BrowserRouter>
    <App />
    {/* <Routes>
        <Route path="/A" element={<A />} />
        <Route path="/B" element={<B />} />
        <Route path="/C" element={<C />} />
      </Routes> */}
  </BrowserRouter>
  //</React.StrictMode>
);

reportWebVitals();
