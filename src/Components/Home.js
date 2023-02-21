import React from "react";
import './Home.css';
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="Home-Container">
        <img className="Home-image" src="https://m.media-amazon.com/images/I/71z8youNyRL._SX3000_.jpg" alt="Home-image"/>

        <div className="Home-row">
          <Product/>
        </div>

        <div className="Home-row">

          
        </div>

        <div className="Home-row">

          
        </div>

      </div>
    </div>
  );
}

export default Home;