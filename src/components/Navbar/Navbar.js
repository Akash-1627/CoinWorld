import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
    const navref = useRef();

    const shownavbar = () => {
        navref.current.classList.toggle("responsive-nav");
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <header>
            <h3><a href="/">CoinWorld</a></h3>
            <nav ref={navref}>
                <a className='hover' onClick={() => {scrollToSection('whero'); shownavbar()}}>Home</a>
                <a className='hover' onClick={() => {scrollToSection('wmarket'); shownavbar()}}>Market</a>
                <a className='hover' onClick={() => {scrollToSection('wchoose'); shownavbar()}}>Choose Us</a>
                <a className='hover' onClick={() => {scrollToSection('wjoin'); shownavbar()}}>Join</a>
                <button className='nav-btn nav-close-btn' onClick={shownavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={shownavbar}>
                <FaBars />
            </button>
            
        </header>
    );
}

export default Navbar;
