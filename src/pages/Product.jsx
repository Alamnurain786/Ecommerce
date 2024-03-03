import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListProduct = () => {
  const [products, setProduct] = useState([]);
  // Fetch data from API when the component mounts

  useEffect(() => {
    const getProduct = async () => {
      let productData;
      // Check if data is in local storage
      if (sessionStorage.getItem("productData")) {
        productData = JSON.parse(sessionStorage.getItem("productData"));
      } else {
        // Fetch data from API
        const product = await axios.get("https://dummyjson.com/products");
        productData = product.data.products;
        // Store data in local storage
        sessionStorage.setItem(
          "productData",
          JSON.stringify(product.data.products)
        );
      }
      setProduct(productData);
    };
    getProduct();
  }, []);

  return (
    <div>
      <h1 className="bg-Accent-Charcoal text-Secondary-Platinum flex  justify-center items-center">
        Product List
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 :grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 ">
        {products.map((items) => (
          <div
            className=" flex flex-col space m-3 shadow-md border-2 border-gray-300 "
            key={items._id}
          >
            <img
              src={items.thumbnail}
              alt=""
              className="  object-cover h-40 "
            />
            <h2 className="text-Accent-Charcoal px-1 "> Name: {items.title}</h2>
            <p className=" text-Accent-Charcoal px-1 ">
              Desc: {items.description.slice(0, 56)}
            </p>
            <span className="font-bold text-Accent-Charcoal px-1 ">
              Price: {items.price}
            </span>
            <div className="flex justify-between p-1">
              <Link
                to="/productDetails"
                className="bg-Primary-Deep-Navy text-Secondary-Platinum w-24 p-2 rounded-md"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ListProduct;
