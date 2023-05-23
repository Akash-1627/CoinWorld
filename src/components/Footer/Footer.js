import React from 'react';
import './Footer.css';
import wallet from '../../Images/wallet.png';
import lootbox from '../../Images/lootbox.png';

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='left'>
                    <img src={wallet} alt='imgdata'></img>
                </div>
                <div className='mid'>
                    <div className='links'>
                    <i className='bx bxl-linkedin-square'></i>
                    <i className='bx bxl-github'></i>
                    <i className='bx bxl-discord-alt'></i>
                    <i className='bx bxl-youtube'></i>
                    </div>
                    <div className='linktext'>
                        <p>Privacy</p>
                        <p>Terms of Use</p>
                    </div>
                </div>
                <div className='right'>
                    <img src={lootbox} alt='imgdata'></img>
                </div>
            </section>
        </>
    );
}

export default Footer;
