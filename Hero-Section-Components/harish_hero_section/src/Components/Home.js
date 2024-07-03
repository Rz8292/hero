import React from 'react'
import Logo from '../Images/HomePageSvg.svg';

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
    <div className='relative h-full flex'>
    {/* Left side with logo */}
    <div className='sm:w-1/2 xl:w-1/2 hidden lg:block'>
      <img
        src={Logo}
        className=" md:w-full xl:w-full h-full w-full object-cover transition-all duration-700 hover:scale-90"
        alt="Company Logo"
      />
    </div>

    {/* Right side with animated content */}
    <div className="md:w-1/2 xl:w-1/2 p-8 flex items-center justify-center">
      <div className='text-center'>
        <span class="self-center text-6xl font-bold whitespace-nowrap font-mono text-black animate-pulse">H</span>
        <span class="self-center text-4xl font-bold whitespace-nowrap font-mono text-blue-500 animate-pulse">T</span>
       <span class="self-center text-4xl font-bold whitespace-nowrap font-mono text-black animate-pulse">E</span>
       <span class="self-center text-4xl font-bold whitespace-nowrap font-mono text-blue-500 animate-pulse">C</span>
       <span class="self-center text-4xl font-bold whitespace-nowrap font-mono text-black animate-pulse">H</span>
        <p className="text-lg mt-6">
         At HTech, we specialize in delivering cutting-edge solutions across web technologies, Android, and iOS platforms. Our expertise spans from developing robust web applications to crafting intuitive mobile experiences.
        </p>
        <div className='justify-center flex pt-12'>
        <svg class="items-center justify-center flex w-6 h-6 text-gray-800 dark:text-black animate-bounce" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
        </svg>
        </div>
        <a href='#about'><h3 className="text-xl font-semibold mb-4 cursor-pointer">About us</h3></a>
      </div>
    </div>
  </div>
  </section>
  )
}

export default Home