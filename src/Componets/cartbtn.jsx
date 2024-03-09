import React from "react";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Cartbtn = () => {
  const cartItem = useSelector((state) => state.cart);
  return (
    <div>
      <button className=" h-full relative">
        <div className="count absolute -top-2 -right-3 bg-red rounded-md text-sm p-0 px-1 border-2  text-Secondary-Platinum ">
          {cartItem.length}
        </div>
        <FontAwesomeIcon
          icon={faCartShopping}
          className=" text-sixth  text-3xl"
        />
      </button>
    </div>
  );
};

export default Cartbtn;
