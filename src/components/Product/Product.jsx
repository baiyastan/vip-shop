import React from "react";
import "./Product.scss";
import heart from "../../assets/svg/heart.svg";
import { Link } from "react-router-dom";

function Product({ data }) {
  return (
    <div className="prodact">
      <div className="icons">
        <img src={heart} alt="" />
      </div>
      <Link to={`/details/${data.id}`}>
        <img className="image" src={data.images[1]} alt="" />
      </Link>

      <div className="prodact-title">
        <h5>{data.title}</h5>
        <div className="prodact-price">
          <p>${data.price - 20}</p>
          <h5>${data.price}</h5>
        </div>
        <div className="jyldyz">
          {/* <img src={jyldyz} alt="" />
          <img src={jyldyz} alt="" />
          <img src={jyldyz} alt="" />
          <img src={jyldyz} alt="" />
          <img src={jyldyz} alt="" /> */}
          <h4>(88)</h4>
        </div>
      </div>
    </div>
  );
}

export default Product;
