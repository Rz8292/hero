import React from "react";
import "./App.css";
import Navbar from "./Navbar"; 

const pizzaData = [
  {
    name: "Pizza Pepperoni",
    ingredients: "with tomato sauce, beef pepperoni, mozzarella cheese.",
    price: 239,
    photoName: "pizzas/pepproni.jpg",
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 119,
    photoName: "pizzas/margherita.jpg",
  },
  {
    name: "Pizza BBQ Meatlovers ",
    ingredients: "beef, Italian sausage, smoky honey ham, rich BBQ sauce & mozzarella",
    price: 419,
    photoName: "pizzas/bbq.jpg",
  },
  {
    name: "Pizza Chicken Italiano ",
    ingredients: "Chicken Sausage, Chicken Pepperoni, Mushroom, Capsicum & Black Olive",
    price: 349,
    photoName: "pizzas/chicken.jpg",
  },
  {
    name: "Pizza Super Supreme",
    ingredients: "Pepperoni, Italian sausage, ham, mild sausage, beef topping, green pepper, sliced mushrooms, red onion",
    price: 229,
    photoName: "pizzas/supreme.jpg",
  },
  {
    name: "Pizza Veggie Lover",
    ingredients: "tomato sauce, mushrooms, pineapples, tomatoes, capsicums, onions, mozzarella cheese.",
    price: 199,
    photoName: "pizzas/veggie.jpg",
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Top Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>Craving Comfort? Our Pizza is the Perfect Match. Order Now! ❤️</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Working on pizzas for YOU.</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>Rs. {pizzaObj.price}</span>
        <button className="btn add">Add</button>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We are currently closed. Please Order between {openHour}:00 and {closeHour}:00.</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>We're open from {openHour}:00 to {closeHour}:00.</p>
      <p>Order NOW!</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
