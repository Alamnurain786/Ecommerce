import React, { useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes, FaTrash } from "react-icons/fa";
import { removeFromCart } from "../Redux/cartSlice";

const Cartbtn = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const handleDelete = async (itemId) => {
    // added await keyword for async action
    await dispatch(removeFromCart({ id: itemId }));
  };

  return (
    <div className="group relative z-10">
      <button className=" h-full relative" onClick={() => setShowMenu(true)}>
        <div className="count absolute -top-2 -right-3 bg-red rounded-md text-sm p-0 px-1 border-2  text-Secondary-Platinum ">
          {cartItems?.length}
        </div>
        <FontAwesomeIcon
          icon={faCartShopping}
          className=" text-Green  text-3xl"
        />
      </button>
      <div
        className={`cartItem  absolute w-96 p-5 top-10 right-0 shadow-lg bg-Green z-20 rounded-md ${
          showMenu ? "block" : "hidden"
        } `}
      >
        <div className="closeIcon absolute border-x-Secondary-Platinum  h-6 w-6 -top-2 -right-2  bg-red flex justify-center items-center rounded-lg">
          <button onClick={() => setShowMenu(false)}>
            <FaTimes />
          </button>
        </div>
        <h3 className="text-xl font-bold uppercase text-Neutral-Light-Gray mb-3">
          My Cart
        </h3>

        <div className="items space-y-3">
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              const disPrice =
                item.price - (item.price * item.discountPercentage) / 100;
              const finalPrice = Number(disPrice.toFixed(2)); // converted to number
              return (
                <div
                  key={item._id}
                  className=" relative flex gap-3 shadow-md border-t-Neutral-Light-Gray  border-[1px] p-5"
                >
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="size-16 object-cover rounded-md"
                  />
                  <div className="info ">
                    <h3>{item.title}</h3>
                    <p>{`$${finalPrice}`}</p>{" "}
                    {/* added template literal for string interpolation */}
                  </div>
                  <div
                    onClick={() => handleDelete(item.id)}
                    className="deleteBtn absolute border-x-Secondary-Platinum  w-8 h-8 -top-3 -right-2 cursor-pointer  bg-red flex justify-center items-center rounded-full"
                  >
                    <FaTrash />
                  </div>
                </div>
              );
            })
          ) : (
            <div>There are no items</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cartbtn;
