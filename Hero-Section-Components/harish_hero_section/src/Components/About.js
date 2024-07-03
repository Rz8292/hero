import React from 'react'

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center ">
      <div className='py-8 px-4 lg:py-16 lg:px-24'>
     <div class="gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
     <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-black">
          <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-black">Above <span class="font-extrabold">200+</span> companies services worldwide</h2>
          
          <p class="mb-4 font-light">At HTech, we offer innovative products designed to enhance productivity and streamline operations. Our Workspace solutions are customizable to fit your unique needs, ensuring maximum efficiency. Our Chatbot AI leverages cutting-edge technology to automate and improve customer interactions, providing a seamless user experience. Additionally, our powerful AI Tools are crafted to simplify complex tasks, helping you make informed decisions with ease. Discover how our products can transform your business and drive success.</p>
          <p class="mb-4 font-medium">At HTech, we specialize in delivering tailored solutions across web technologies, Android, and iOS platforms. Our expertise ensures scalable and high-performance web development, along with seamless mobile experiences. Let us help you achieve your digital goals with our comprehensive and innovative services.</p>
          <a href="#services" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
              Service more
              <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
      </div>
      
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
        </div>
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            144K
          </h6>
          <p className="font-bold">Organisations</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            32.1K
          </h6>
          <p className="font-bold">Users on the platform</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            12.9K
          </h6>
          <p className="font-bold">Transactions this year</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            24.5K
          </h6>
          <p className="font-bold">People on the team</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About