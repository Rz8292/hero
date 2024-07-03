import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import studentWorkspace from '../Images/StudentWorspace.jpeg'
import chatbot from '../Images/chatbot.jpeg'
import ai from '../Images/ai2jpeg.jpeg'

function Product() {

  return (
    <section id="product" className="min-h-screen flex items-center justify-center bg-white">
      <div class="bg-white py-18 mt-20">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-black mb-8 text-center">Introducing Our Latest Product</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src={studentWorkspace} alt="Product"/>
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                    
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Student Workspace</h3>
                <p class="text-gray-500 text-sm mt-2">
                Our student workspace is designed to optimize learning and productivity. With comfortable seating, efficient lighting, and a quiet atmosphere, it provides a conducive environment for focused study and academic success. students can engage in research, Our goal is to create a supportive space where students can thrive and achieve their educational goals.</p>
                <div class="flex items-center justify-between mt-4">
                    <span class="text-gray-900 font-bold text-lg">$29.99</span>
                    <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Learn More</button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src={chatbot} alt="Product"/>
                    <div class="absolute inset-0 bg-black opacity-40"></div>        
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Chatbot for Company</h3>
                <p class="text-gray-500 text-sm mt-2">Our AI-powered chatbot enhances customer interactions by providing instant responses, guiding users through product information, and troubleshooting issues. Available round-the-clock on our website and messaging platforms, it ensures efficient, personalized service, reflecting our commitment to customer satisfaction through innovative technology.</p>
                <div class="flex items-center justify-between mt-4">
                    <span class="text-gray-900 font-bold text-lg">$29.99</span>
                    <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Learn More</button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src={ai} alt="Product"/>
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                    
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Centralized AI Tools</h3>
                <p class="text-gray-500 text-sm mt-2">Our centralized AI platform integrates diverse AI capabilities, including natural language processing, image recognition, and predictive analytics. It enhances efficiency and innovation by providing a unified solution for leveraging AI across operations and decision-making processes, empowering organizations to streamline workflows and enhance customer interactions.

</p>
                <div class="flex items-center justify-between mt-4">
                    <span class="text-gray-900 font-bold text-lg">$29.99</span>
                    <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Learn More</button>
                </div>
            </div>
        </div>

    </div>
</div>
    </section>
  );
}

export default Product;
