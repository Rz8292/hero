import React from 'react'
import './Main.css'
import video_bg from '../images/videobg.mp4'
import Header from './Header'
import Hero from './Hero'


const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={video_bg} autoPlay loop muted />
        <div className="content">
            <Header/>
            <div className="w-full xl:max-w-[1250px] mx-auto px-4 " >
                <Hero />
            </div>
        </div>
    </div>
  )
}

export default Main
