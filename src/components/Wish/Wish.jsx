import React, { useState } from "react";
import Product from "../Product/Product";
import { useSelector } from "react-redux";
import "./Wish.scss";

function Wish() {
  const { items } = useSelector((state) => state.wishlist);
  return (
    <div className="wish-product">
      {items?.map((item) => (
        <Product key={item.idDrink} data={item} icon={true} />
      ))}
    </div>
  );
}

export default Wish;
