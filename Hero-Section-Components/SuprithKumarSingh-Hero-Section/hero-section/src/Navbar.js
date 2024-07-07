import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#veg">Veg</a>
          <ul className="dropdown">
            <li><a href="#margherita">Margherita</a></li>
            <li><a href="#veggie">Veggie Lover</a></li>
            <li><a href="#cheese">Cheese Pizza</a></li>
            <li><a href="#chicken">Cheese Burst</a></li>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#nonveg">Non-Veg</a>
          <ul className="dropdown">
            <li><a href="#pepperoni">Pepperoni</a></li>
            <li><a href="#bbq">BBQ Meatlovers</a></li>
            <li><a href="#chicken">Chicken Italiano</a></li>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#desserts">Desserts</a>
          <ul className="dropdown">
            <li><a href="#tiramisu">Choco Lava</a></li>
            <li><a href="#chocolate">Chocolate Cake</a></li>
            <li><a href="#icecream">Ice Cream</a></li>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#beverages">Beverages</a>
          <ul className="dropdown">
            <li><a href="#softdrinks">Soft Drinks</a></li>
            <li><a href="#wine">Mojito</a></li>
            <li><a href="#beer">Fruit-Beer</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
