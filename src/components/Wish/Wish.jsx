import React, { useState } from "react";
import Product from "../Product/Product";

function Wish() {
  const [wishProduct, setWishProduct] = useState([
    {
      id: 5,
      title: "Classic Black Hooded Sweatshirt",
      price: 79,
      description:
        "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
      images: [
        "https://i.imgur.com/cSytoSD.jpeg",
        "https://i.imgur.com/WwKucXb.jpeg",
        "https://i.imgur.com/cE2Dxh9.jpeg",
      ],
      creationAt: "2024-08-24T00:44:40.000Z",
      updatedAt: "2024-08-24T00:44:40.000Z",
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        creationAt: "2024-08-24T00:44:40.000Z",
        updatedAt: "2024-08-24T00:44:40.000Z",
      },
    },
  ]);
  return (
    <div>
      {wishProduct && wishProduct?.map((item) => <Product data={item} />)}
    </div>
  );
}

export default Wish;
