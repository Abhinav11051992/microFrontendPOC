import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer"
const App = () => (
  <div className="container">
     <Header/>

    <p>Product Description Page Content</p>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
