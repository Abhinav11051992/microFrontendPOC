import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";
import Footer from "./Footer"
const App = () => (
  <div className="container">
     <Header/>

    <p>Home Page Content</p>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
