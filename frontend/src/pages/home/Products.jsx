import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { CiFilter } from "react-icons/ci";
import productsData from "../../assets/products.json"; // นำเข้าข้อมูล JSON

const Products = () => {
  const [products, setProducts] = useState([]);
  const [fliteredItems, setFliteredItems] = useState([]);
  const [selectCategory, setSelectCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    // ใช้ข้อมูล JSON ที่ import มาแทนการ fetch
    setProducts(productsData);
    setFliteredItems(productsData);
  }, []);

  // filtering function 
  const filterItems = (category)=> {
    const filterd = category === "all" ? (products) : products.filter((item)=> item.category === category)
    setFliteredItems(filterd)
    setSelectCategory(category)
  }

  const showAll = () =>{
    setFliteredItems(products)
    setSelectCategory("all")
  }

  // sorting funationality
  const handleSortChange = (option) => {
    setSortOption(option)

    // ligic for sort 
    let sortItems = [...fliteredItems]

    switch(option){
      case "A-Z" : 
        sortItems.sort((a, b) => a.title.localeCompare(b.title))
        break;
      case "Z-A" :
        sortItems.sort((a, b) => b.title.localeCompare(a.title))
        break;
      case "low-to-high" :
        sortItems.sort((a, b) => a.price - b.price)
        break;
      case "high-to-low" :
        sortItems.sort((a, b) => b.price - a.price)
        break;
      default :
        break;
    }
    setFliteredItems(sortItems);
  }
  return (
    <div>
      <h1 className="title py-4">Follow products and discounts on Instagram</h1>

      {/* Products Card */}
      <div className="">
        <div className="flex flex-col md:flex-row items-center flex-wrap md:justify-between mx-24 mb-8">
          {/* all btn */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 flex-wrap gap-12">
            <button onClick={()=>filterItems("all")}>All Products</button>
            <button onClick={()=>filterItems("Hoodies")}>Hoodies</button>
            <button onClick={()=>filterItems("Dress")}>Dress</button>
            <button onClick={()=>filterItems("T-Shirt")}>T-Shirt</button>
          </div>

          {/* sorting option */}
          <div className="flex">
            <div className="bg-Black p-2 rounded-l-sm">
              <CiFilter className="text-2xl text-White" />
            </div>
            <select
              onChange={(e)=> handleSortChange(e.target.value)}
              value={sortOption}
              name=""
              id="sort"
              className="bg-Black text-White outline-none hover:outline-none rounded-r-sm"
            >
              <option value="default">default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">low to high</option>
              <option value="high-to-low">high to low</option>
            </select>
          </div>
        </div>
      </div>
      <Card fliteredItems={fliteredItems} />
    </div>
  );
};

export default Products;
