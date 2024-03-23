import React from "react";
import "./ProductCard.scss";
import { products } from "../../helper/data";

const ProductCard = ({ selectedCategory}) => {
  const filteredCategory =
  selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  return (
    <div className="productCardContainer">
      
      { filteredCategory.map((item)=>(
      <div
        className="productCard"
        style={{
          backgroundImage: `url(${item.image})`
        }}
      >
        <div className="price">{item.price}</div>
        <div className="title">{item.title}</div>
      </div>))}
      
     
    </div>
  );
};

export default ProductCard;

