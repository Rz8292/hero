import React from 'react'
import Fade from 'react-reveal/Fade';
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-screen items-center pt-[4rem] md:pt-[0rem] w-full mt-0">
        
        <Fade bottom >
            <div className="flex flex-col flex-1 h-full items-center md:items-start justify-center text-white text-center md:text-start space-y-5 mb-[4rem] " >
                <p className="text-[#e87d0e] text-[1rem] md:text-[1.4rem] font-medium  " >Bring out the Best in you</p>
                <h1 className="text-[1.8rem] md:text-[2.4rem] font-bold w-full lg:w-[25rem] " >
                    Unlimited Games Heaven
                </h1>
                <p className="text-[0.75rem] md:text-[0.8rem] w-full lg:w-[19rem] text-gray-200 " >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                </p>

                <button className="text-lg w-[10rem] py-2 rounded-full bg-gradient-to-tr from-[#D80027] to-[#FB9E3C]" >Play Now</button>
            </div>
        </Fade>

        <Fade bottom>
            <div className="flex items-center justify-center flex-1 h-full" >
                <img src={require("../images/hero.png")} />
            </div>
        </Fade>
    </div>
  )
}

export default Hero
