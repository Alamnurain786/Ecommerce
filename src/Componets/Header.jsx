import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between bg-Secondary-Platinum  pr-6 pl-6 pt-3 pb-2 shadow-md">
        <div className="flex items-center gap-5 ">
          <img
            className="rounded-full h-12 w-12"
            src="https://picsum.photos/id/50/64/64"
            alt=""
          />
          <p className=" text-xl">Hamro Bazar</p>
        </div>
        <div className=" flex gap-3  invisible lg:visible">
          <input
            type="text"
            placeholder="Search"
            className="rounded-md p-2 w-80"
          />
          <button className="bg-Primary-Deep-Navy text-Secondary-Platinum p-2 rounded-md">
            Search
          </button>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="visible md:invisible flex items-center cursor-pointer text-xl"
        />
        <nav className=" flex items-center gap-4 invisible md:visible">
          <ul className="flex  gap-4 ">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </ul>
        </nav>
        <button className="px-4 py-2 text-Secondary-Platinum bg-Primary-Deep-Navy rounded-md ">
          Cart
        </button>
      </header>
    </div>
  );
};

export default Header;
