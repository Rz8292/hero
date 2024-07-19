import React from "react";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="p-5 grid grid-cols-2 md:grid-cols-7 gap-8">
        <div className="col-span-2 space-y-5">
          <h1>Digital</h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            mollitia dolorum voluptas! Beatae voluptate, sint praesentium
            inventore nisi ipsum doloremque.
          </p>
        </div>
        <div>
          <h2 className="font-bold py-2">About</h2>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <a href="/">About</a>
            <a href="/">Features</a>
            <a href="/">News</a>
            <a href="/">Art</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold py-2">Company</h2>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <a href="/">Blog</a>
            <a href="/">Faqs</a>
            <a href="/">Payment</a>
            <a href="/">price</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold py-2">Support</h2>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <a href="/">Account</a>
            <a href="/">Contact</a>
            <a href="/">Help</a>
            <a href="/">Art</a>
          </div>
        </div>

        <div className="col-span-2 space-y-5">
          <h2 className="font-bold">Get In Touch</h2>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            veritatis nam maiores. Accusantium, veniam quo.
          </p>
          <p>
            <a
              href="/"
              className="px-5 py-2 rounded-full text-white bg-green-500 font-semibold"
            >
              contact Us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
