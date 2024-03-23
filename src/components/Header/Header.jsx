import { categories } from "../../helper/data";

import "./Header.scss";

function Header({setSelectedCategory}) {
  return (
    <div className="header1">
      <h1 >Product List</h1>
      <div className="filter">
        {categories.map((category) => (
          <button onClick={()=>setSelectedCategory(category)} key={category}>{category.toUpperCase()}</button>
        ))}
      </div>
    </div>
  );
}

export default Header;
