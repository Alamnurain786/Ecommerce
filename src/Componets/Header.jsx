import React from "react";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Cartbtn from "./cartbtn";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center bg-fourth   px-10 py-5 shadow-xl text-Secondary-Platinum">
        <div className="flex items-center gap-5 ">
          <img
            className="rounded-full h-12 w-12"
            src="https://picsum.photos/id/50/64/64"
            alt=""
          />
          <p className=" text-xl">Hamro Bazar</p>
        </div>

        {/* <FontAwesomeIcon
          icon={faBars}
          className="visible md:invisible flex items-center cursor-pointer text-xl"
        /> */}
        <nav className="space-x-5 invisible md:visible">
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
        </nav>
        <div className="btn flex items-center gap-5">
          <Cartbtn />
          <button className="px-4 py-2 text-Secondary-Platinum bg-sixth rounded-md ">
            Login
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
