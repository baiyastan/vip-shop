import React from "react";
import "./Product.scss";
import heart from "../../assets/svg/heart.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWish, removeWish } from "../../redux/wish/wishSlice";
import deleteSvg from "../../assets/svg/delete.svg";

function Product({ data, icon }) {
  const distpach = useDispatch();
  return (
    <div className="prodact">
      {icon && (
        <div
          onClick={() => distpach(removeWish(data.idDrink))}
          className="icons"
        >
          <img src={deleteSvg} alt="" />
        </div>
      )}
      {!icon && (
        <div onClick={() => distpach(addWish(data))} className="icons">
          <img src={heart} alt="" />
        </div>
      )}

      <Link to={`/details/${data.id}`}>
        <img className="image" src={data.strDrinkThumb} alt="" />
      </Link>

      <div className="prodact-title">
        <h5>{data.strDrink}</h5>
        <div className="prodact-price">
          <p>${data.idDrink - 20}</p>
          <h5>${data.idDrink}</h5>
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
