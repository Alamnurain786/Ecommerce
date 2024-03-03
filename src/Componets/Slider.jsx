import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";

const SimSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Check if data is in session storage
    if (sessionStorage.getItem("productData")) {
      const productData = JSON.parse(sessionStorage.getItem("productData"));
      setProducts(productData);
      console.log(productData);
    }
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          //   padding: "1px",
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        {dots}
      </div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-full h-64 overflow-hidden"
          >
            <img
              src={product.images[0]}
              alt={products.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimSlider;
