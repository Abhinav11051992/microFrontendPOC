import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";
import product from './data/productsLists.json';

console.log(product);
const App = () => (
  <div className="container">
     <Header/>
    <div>

            {product.products.map((p) => 
              <div className="container__description">
                <img src={p.imageurl} alt ="test"/>
                    <p className="container__price">{p.name} <b>${p.price}</b></p>
                    <Button>Add to cart</Button>
              </div>
            )}

    </div>
    
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
