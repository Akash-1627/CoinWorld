import React from 'react';
import './Join.css';

const Join = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <>
            <section className='join' id='wjoin'>
                <h1 className='joinval'>JOIN US VIA</h1>
                <h1 className='joinvalcol'>DISCORD</h1>
                <p>Invest and manage all your crypto at one place.</p>
                <a className='hover1'  onClick={() => scrollToSection('whero')}><button>Join Via Discord</button></a>
            </section>
        </>
    );
}

export default Join;
