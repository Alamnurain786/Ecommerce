import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-Secondary-Platinum p-2">
        <div className="flex flex-col justify-center  ">
          <p className="text-lg">Hamro Bazar</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            www.Hamrobazar.com
          </a>
          <p>Address: Kathmandu, Nepal</p>
          <p>Phone: 1234567890</p>
          <p>Email: Hamrobazar@email.com</p>
        </div>

        <div className="flex flex-col ">
          <p className="text-lg underline">Useful Links</p>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex items-start flex-col">
          <p className="mb-2 text-lg underline">Follow Us</p>
          <FontAwesomeIcon
            icon={faFacebook}
            className="w-8 h-8 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="w-8 h-8 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-8 h-8 cursor-pointer"
          />
        </div>
      </div>
      <div className="copyright text-center bg-Primary-Deep-Navy text-Secondary-Platinum p-2">
        © {new Date().getFullYear()} Ecommerce Store | Designed by{" "}
        <a href="#" rel="noopener noreferrer" target="_blank">
          Nurain Alam
        </a>
      </div>
    </footer>
  );
};

export default Footer;
