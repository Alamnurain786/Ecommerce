import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { addToCart } from "../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [currentImage, setImage] = useState(null);
  const priceAfterDis =
    product.price - (product.price * product.discountPercentage) / 100;
  const actualPrice = priceAfterDis.toFixed(2);
  const dispatch = useDispatch();

  useEffect(() => {
    async function ProductDetail() {
      let response = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      setProduct(response.data);
    }
    ProductDetail();
    setImage(setProduct.thumbnail);
  }, [params.id]);

  useEffect(() => {
    setImage(product.thumbnail);
  }, [product.thumbnail]);

  // chech if same itmes in redux store then not add it again otherwise add into cart again or add new items
  const { cartItems } = useSelector((state) => state.cart);

  const checkInventory = (id) => {
    return cartItems.find(() => product.id === id);
  };

  const handleAddToCart = () => {
    if (checkInventory(product.id)) {
      // Change here
      toast.error(`${product.title} is already in your cart`);
    } else {
      // Add item to Redux store
      dispatch(addToCart(product));
      // Show a success message
      toast.success(`${product.title} added to cart`);
    }
  };

  return (
    <section>
      <div className="container p-10 flex gap-10">
        <div className="w-1/2 flex justify-between items-stretch">
          <div className="thamnail w-1/4 flex flex-col gap-3">
            {product?.images?.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className="size-24   p-3 rounded-md"
              />
            ))}
          </div>
          <div className="imagewaper w-3/4">
            <img
              src={currentImage}
              className="h-full object-cover rounded-md"
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="details">
            <h3 className="text-2xl font-bold">
              {product.title}
              <span className="text-sm bg-Secondary-Platinum px-3 py-1 rounded-sm ml-1">
                {product.brand}
              </span>
            </h3>
            <div className="meta my-5 flex text-xl font-bold items-center gap-4">
              <div className="items flex items-center gap-3">
                <IoIosPricetags />
                <span>${actualPrice}</span>
              </div>
              <div className="item line-through">{product.price}</div>
              <div className="cat bg-Secondary-Platinum rounded-md px-3 text-sm py-1">
                {product.category}
              </div>
            </div>
            <p>{product.description}</p>
            <div className="moreinfo ">
              {product.stock < 1 ? "Out of Stock" : " In Stock"}
            </div>
            <div className="button flex items-center gap-5">
              <button className="bg-Primary-Deep-Navy text-Secondary-Platinum mt-5 px-3 py-1 text-sm bg-green-500 text-white rounded-md">
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-Primary-Deep-Navy text-Secondary-Platinum mt-5 px-3 py-1 text-sm bg-green-500 text-white rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Zoom
      />
    </section>
  );
};

export default ProductDetails;
