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
            <li><a href="#cheese">Cheese</a></li>
            <li><a href="#italian">Italian Veg</a></li>
            <li><a href="#burst">Double-Cheese Burst</a></li>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#nonveg">Non-Veg</a>
          <ul className="dropdown">
            <li><a href="#pepperoni">Pepperoni</a></li>
            <li><a href="#bbq">BBQ Meatlovers</a></li>
            <li><a href="#chicken">Chicken Italiano</a></li>
            <li><a href="#chicken">Chicken Fiesta</a></li>
            <li><a href="#chicken">Classic Chicken</a></li>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#Breads">Breads</a>
          <ul className="dropdown">
            <li><a href="#GarlicB">Garlic Bread</a></li>
            <li><a href="#cheesyB">Cheesy Bread</a></li>
            <li><a href="#B-twists">Bread Twists</a></li>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#desserts">Desserts</a>
          <ul className="dropdown">
            <li><a href="#lava">Choco Lava</a></li>
            <li><a href="#chocolate">Chocolate Cake</a></li>
            <li><a href="#Fruit">Fruit Cake</a></li>
            <li><a href="#B-Forest">Black Forest Cake</a></li>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#beverages">Beverages</a>
          <ul className="dropdown">
            <li><a href="#water">Water Bottle 2L</a></li>
            <li><a href="#coke">Coke</a></li>
            <li><a href="#mojito">Mojito</a></li>
            <li><a href="#f-beer">Fruit-Beer</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
