import React from "react";
import './Home.css';
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="Home-Container">
        <img className="Home-image" src="https://m.media-amazon.com/images/I/71z8youNyRL._SX3000_.jpg" alt="Home-image"/>

        <div className="Home-row">
          <Product 
            id="1234" 
            title="mac book pro 14" 
            price={2700000} 
            image="https://www.apple.com/kr/macbook-pro/ah/images/overview/hero_13__d1tfa5zby7e6_large_2x.jpg" 
            rating={5}/>
        </div>

        <div className="Home-row">
          <Product 
              id="2345" 
              title="Pillow Plush Toy" 
              price={37000}
              image="https://m.media-amazon.com/images/I/61y-X5OGtnS._AC_UL800_FMwebp_QL65_.jpg" 
              rating={3}/>

          <Product 
              id="3456" 
              title="Nintendo Switch : OLED Model" 
              price={360000}
              image="https://m.media-amazon.com/images/I/51yJ+OqktYL._AC_UY436_FMwebp_QL65_.jpg" 
              rating={4}/>

          <Product 
              id="4567" 
              title="Hogwarts Legacy" 
              price={80000}
              image="https://m.media-amazon.com/images/I/816nYzwbSOL._AC_UY436_FMwebp_QL65_.jpg" 
              rating={5}/>
        </div>

        <div className="Home-row">
          <Product 
              id="5678" 
              title="PlayStation 5" 
              price={660000}
              image="https://m.media-amazon.com/images/I/51051FiD9UL._AC_UY436_FMwebp_QL65_.jpg" 
              rating={2}/>       
        </div>

      </div>
    </div>
  );
}

export default Home;