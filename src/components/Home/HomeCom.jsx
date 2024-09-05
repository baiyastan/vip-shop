import React, { useState, useEffect } from "react";
import "./Home.scss";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";
import apiClent from "../../axios/apiClent";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  fetchProductSuccess,
  fetchProductError,
} from "../../redux/product/productSlice";
import Spinner from "../Spinner/Spinner";

function HomeCom() {
  const [product, setProduct] = useState([]);
  const { list, loading, error } = useSelector((state) => state.products);

  const distpach = useDispatch();

  async function getProducts() {
    distpach(fetchProductStart());
    try {
      const res = await apiClent.get("/products");

      setTimeout(() => {
        distpach(fetchProductSuccess(res.data));
      }, 1000);
    } catch (error) {
      console.log(error);
      distpach(fetchProductError(error.message));
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Banner />
      <div className="products container">
        {list?.map((item) => (
          <Product data={item} />
        ))}
      </div>
    </>
  );
}

export default HomeCom;
