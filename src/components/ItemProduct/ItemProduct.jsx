import React, { useState, useEffect } from "react";
import "./Item.scss";
import { useParams } from "react-router-dom";
import apiClent from "../../axios/apiClent";

function ItemProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const [image, setImage] = useState("");

  async function getProduct() {
    try {
      const res = await apiClent.get(`/products/${id}`);
      console.log(res);
      setProduct(res.data);
      setImage(res.data.images[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="item-product container">
      <div className="images">
        {product?.images?.map((item, index) => (
          <img onClick={() => setImage(item)} src={item} key={index} />
        ))}
      </div>
      <img src={image} alt="" />
      <div></div>
    </div>
  );
}

export default ItemProduct;
