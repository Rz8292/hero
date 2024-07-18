import { useState } from 'react';
import vdo from './assets/back-video.mp4';
import './App.css';

function App() {
  return (
    <>
      <div className="bg-dark">
        <div className="max-w-screen-xl mx-auto px-8 py-20">
          <div className="lg:flex lg:items-center lg:justify-between">
            {/* Left Section: Text Content */}
            <div className="w-full lg:w-1/2 lg:order-1">
              <h1 className="text-5xl font-bold mb-4 text-center text-white lg:text-left">
                Elevate Your <span className="text-blue-400">Lifestyle</span> with Every <span className="text-red-400">Purchase</span>
              </h1>
              <h2 className="text-2xl text-center text-gray-300 mb-6 lg:text-left">
                Discover Style That Speaks Your Language
              </h2>
              <div className="text-center lg:text-left">
                <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:order-2">
              <video 
                className="w-full h-auto mr-auto lg:mr-0" // Adjusted margin right for large screens
                style={{ maxHeight: "400px" }} // Adjust max height as needed
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src={vdo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
