import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-blue-200">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUON6AJCRDvd5XhocgKhXnG7MUFp70jADSCM9UgKjC&s"
            alt=""
            className="w-[150px]"
          />
        </Link>

        <ul className="">
          <Link to="/">
            <li className="inline-block m-4">Home</li>
          </Link>
          <Link to={"/contact"}>
            <li className="inline-block m-4">contact</li>
          </Link>
          <Link to={"/login"}>
            <li className="inline-block m-4">Login</li>
          </Link>
          <li className="inline-block m-4">Signup</li>
        </ul>
      </div>
    </div>
  );
};
