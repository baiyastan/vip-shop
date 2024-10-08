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
import axios from "axios";

const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

function HomeCom() {
  const [product, setProduct] = useState([]);
  const { list, loading, error } = useSelector((state) => state.products);

  const distpach = useDispatch();

  async function getProducts() {
    distpach(fetchProductStart());
    try {
      const res = await axios.get(API);

      console.log(res);

      setTimeout(() => {
        distpach(fetchProductSuccess(res.data.drinks));
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
