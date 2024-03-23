import React, { useState } from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
// import { products } from "./helper/data";


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="App">
      <Header setSelectedCategory={setSelectedCategory} />
      <ProductCard selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
