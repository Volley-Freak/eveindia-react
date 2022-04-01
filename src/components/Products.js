import React from "react";
import product1 from "../assets/product1.svg";
import product2 from "../assets/product2.svg";
import product3 from "../assets/product3.svg";
import "./product.css";

function Products() {
  return (
    <div className="product-container container">
      <div className="heading">OUR <br/> PRODUCTS </div>
      <div className=" d-flex justify-content-center align-items-center product product1">
        <div className="product-img col-xl-5 col-lg-12 col-md-12">
          <img src={product1} width="100%" height="100%" alt="product1" />
        </div>
        <div className="product-info col-xl-7 col-lg-12 col-md-12">
          <div className="title">Product 1</div>
          <div className="speed-max-speed">
            <div className="speed">
              <h3>3.5s</h3>
              <br />
              <p>0-60mph</p>
            </div>
            <hr />
            <div className="max-speed">
              <h3>150mph</h3>
              <br />
              <p>Top Speed</p>
            </div>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.oddndndn Lorem ipsum dolor sit amet, consectetur adipiscing elit.oddndndn
          </div>
          <button className="product-btn">View More</button>

        </div>
      </div>
      <div className=" d-flex flex-row-reverse justify-content-center align-items-center product product2">
        <div className="product-img col-xl-6 col-lg-12 col-md-12">
          <img src={product2} width="100%" alt="product1" />
        </div>
        <div className="product-info col-xl-6 col-lg-12 col-md-12">
          <div className="title">Product 2</div>
          <div className="speed-max-speed">
            <div className="speed">
              <h3>3.5s</h3>
              <br />
              <p>0-60mph</p>
            </div>
            <hr />

            <div className="max-speed">
              <h3>150mph</h3>
              <br />
              <p>Top Speed</p>
            </div>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.oddndndn Lorem ipsum dolor sit amet, consectetur adipiscing elit.oddndndn
          </div>
          <button className="product-btn">View More</button>

        </div>
      </div>
      <div className=" d-flex justify-content-center align-items-center product product3">
        <div className="product-img col-xl-6 col-lg-12 col-md-12">
          <img src={product3} width="100%" alt="product1" />
        </div>
        <div className="product-info col-xl-6 col-lg-12 col-md-12">
          <div className="title">Product 3</div>
          <div className="speed-max-speed">
            <div className="speed">
              <h3>3.5s</h3>
              <br />
              <p>0-60mph</p>
            </div>
            <hr />

            <div className="max-speed">
              <h3>150mph</h3>
              <br />
              <p>Top Speed</p>
            </div>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.oddndndn Lorem ipsum dolor sit amet, consectetur adipiscing elit.oddndndn
          </div>
          <button className="product-btn">View More</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
