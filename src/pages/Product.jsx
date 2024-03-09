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
    <section>
      <div className=" px-10 py-10">
        <h3 className=" text-fifth text-3xl font-bold uppercase mb-5">
          Product List
        </h3>
        <div className="grid gap-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {products?.map((items) => {
            const discountedPrice =
              items.price - (items.price * items.discountPercentage) / 100;
            const disprice = discountedPrice.toFixed(2);
            return (
              <div
                className=" product flex  shadow-xl p-3 gap-3  "
                key={items._id}
              >
                <div className="image w-1/4">
                  <img
                    src={items.thumbnail}
                    alt=""
                    className=" size-32 object-cover rounded-md "
                  />
                </div>
                <div className="info w-3/4">
                  <div className="heading flex justify-between items-center gap-3">
                    <h2 className="text-Accent-Charcoal text-xl font-bold   ">
                      {" "}
                      {items.title}
                    </h2>
                    <span className="">${disprice}</span>
                  </div>
                  <p className=" text-Accent-Charcoal text-sm opacity-70 line-clamp-2">
                    Desc: {items.description}
                  </p>

                  <div className=" link flex gap-3">
                    <Link
                      to={`/productDetails/${items.id}`}
                      className=" btn bg-Primary-Deep-Navy text-Secondary-Platinum mt-5 px-3 py-1 text-sm bg-green-500 text-white rounded-md"
                    >
                      Read More
                    </Link>
                    <button className="btn bg-Primary-Deep-Navy text-Secondary-Platinum mt-5 px-3 py-1 text-sm bg-green-500 text-white rounded-md">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListProduct;
