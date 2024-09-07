import React, { useState, useEffect } from "react";
import "./Banner.scss";
import Carousel from "react-bootstrap/Carousel";

import mainImage from "../../assets/image/mainImage.png";
import apiClent from "../../axios/apiClent";

const API = "https://api.escuelajs.co/api/v1/categories";

function Banner() {
  const [category, setCategory] = useState([]);

  async function getCategory() {
    try {
      const res = await apiClent.get("/categories");

      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="banner container">
      <div className="banner-sidebar">
        <ul>
          {category.slice(0, 8).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="banner-carousel">
        <Carousel>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img src={mainImage} alt="" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img src={mainImage} alt="" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img src={mainImage} alt="" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
