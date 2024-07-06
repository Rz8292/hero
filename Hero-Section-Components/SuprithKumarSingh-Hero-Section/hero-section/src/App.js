import React from "react";
import "./App.css";
import Navbar from "./Navbar"; 

const pizzaData = [
  {
    name: "Pizza Pepperoni",
    ingredients: "with tomato sauce, beef pepperoni, mozzarella cheese.",
    price: 6,
    photoName: "pizzas/pepproni.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza BBQ Meatlovers ",
    ingredients: "beef, Italian sausage, smoky honey ham, rich BBQ sauce & mozzarella",
    price: 12,
    photoName: "pizzas/bbq.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Chicken Italiano ",
    ingredients: "Chicken Sausage, Chicken Pepperoni, Mushroom, Capsicum & Black Olive",
    price: 12,
    photoName: "pizzas/chicken.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Super Supreme",
    ingredients: "Pepperoni, Italian sausage, ham, mild sausage, beef topping, green pepper, sliced mushrooms, red onion",
    price: 15,
    photoName: "pizzas/supreme.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Veggie Lover",
    ingredients: "tomato sauce, mushrooms, pineapples, tomatoes, capsicums, onions, mozzarella cheese.",
    price: 18,
    photoName: "pizzas/veggie.jpg",
    soldOut: false,
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
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : `Rs. ${pizzaObj.price}`}</span>
        <button className="btn add">Add</button>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
