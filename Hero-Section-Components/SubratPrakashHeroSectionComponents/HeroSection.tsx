"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import DoctorHero from '@/assets/img/DoctorHero.jpg';

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center bg-blue-150 p-8">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Your Health, Our Responsibility</h1>
        <h2 className="text-2xl mb-2">Book Your Doctors Appointment Easily</h2>
        <p className="text-lg mb-4">Find the best doctors nearest you</p>
        <div className="flex items-center justify-center md:justify-start">
          <input
            type="text"
            placeholder="Search nearest Doctor specialization"
            className="w-full md:w-2/3 px-4 py-2 border rounded-l-md"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Search</button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Image
          src={DoctorHero} // Add the appropriate path to your image
          alt="Doctor"
          width={700}
          height={700}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;   