import React from 'react'
// import { AiOutlineMenu } from 'react-icons/ai'
import './Header.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

const Header = () => {
    window.onload= function(){
        let navbar= document.querySelector('.header .flex .navbar');
        let menuBtn=document.querySelector('#menu-btn');
        menuBtn.onclick = () => {
        navbar.classList.toggle('active');
        }
    }
 
  return (
    <>
    <header className='header'>
        <section className='flex'>
            <a href='' className='logo'><i className='fa fa-trophy'></i>AVIgames</a>
            <nav className='navbar'>
                <a href="#home">home</a>
                <a href="#about">About</a>
                <a href="#faq">FAQ</a>
                <a href="#contact">Contact</a>
            </nav>
            <a href="#" className='btn'>Sign Up</a>
        </section>
    </header>
    <div id='menu-btn'><i className='fa fa-bars'></i></div>
    </>
  )
}

export default Header
