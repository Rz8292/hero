import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../UserContext"; 
import close from "../../public/close.png"; 
import "./Hamburger.css"; 

const Hamburger = ({ isOpen, onClose }) => {
  const { setUserData } = useUser();
  const history = useHistory();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const target = event.target;
      if (!target.closest(".hamburger-menu")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const handleLogout = () => {
    setUserData(null);
    onClose();
    history.push("/login");
  };

  return (
    <div
      className={`fixed top-0 h-full bg-black text-white p-4 w-10/12 lg:w-1/3 transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hamburger-menu`}
    >
      <h1 className="julius text-2xl text-center p-4 underline">
        LOST YOUR WAY?
      </h1>
      <div className="absolute top-4 right-4">
        <img
          src={close}
          alt="close"
          onClick={onClose}
          className="h-8 w-8 cursor-pointer m-2"
        />
      </div>
      <div className=" h-full flex flex-col justify-around">
        <ul className="h-fit flex flex-col justify-between ">
          <div className="p-4 julius text-center">
            <div
              className="block m-4 bg-[#404040] p-3 rounded hover:bg-[#303030] cursor-pointer"
              onClick={() => history.push("/home")}
            >
              Home
            </div>
            <div
              className="block m-4 bg-[#404040] p-3 rounded hover:bg-[#303030] cursor-pointer"
              onClick={() => history.push("/search")}
            >
              Search
            </div>
            <div
              className="block m-4 bg-[#404040] p-3 rounded hover:bg-[#303030] cursor-pointer"
              onClick={() =>
                (window.location.href = "https://www.iqlipse.studio/")
              }
            >
              Contact Us
            </div>
          </div>
        </ul>
        <div className="julius">
          <div
            className="block text-center m-4 bg-[#404040] p-3 rounded hover:bg-[#303030] cursor-pointer"
            onClick={() => history.push("/profile")}
          >
            <button className="julius">Profile</button>
          </div>
          <div
            className="block text-center m-4 bg-red-600 p-3 rounded hover:bg-red-700 cursor-pointer"
            onClick={handleLogout}
          >
            <button>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
