import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import './Hero.css';
import img from '../../blob.svg';
import img1 from '../../blob1.svg';
import Market from '../Market/Market';
import Choose from '../Choose/Choose';
import Join from '../Join/Join';
import Footer from '../Footer/Footer';


const baseURL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cpolygon%2Cbinancecoin&vs_currencies=usd&include_24hr_change=true&precision=2";
const Hero = () => {
    const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
        setPost(response.data);
    }).catch((error) => {
        console.error('Error fetching data:', error);
      });

      const hash = window.location.hash.substr(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);
      
  const truncateToTwoDecimals = (value) => {
    let truncatedValue;
   
  
    if (typeof value === 'number') {
        
          truncatedValue = value.toFixed(2);

          return truncatedValue;
        }
        return value;
    };

    const getColor = (value) => {
        if (value < 0) {
          return 'red';
        } else if (value > 0) {
          return '#0ecb81';
        } else {
          return 'black';
        }
      };

      const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
    

  
    return (
        <>
        <Navbar/>
        <section>
            <div className='blob1'>
                <img src={img1} alt='imag'></img>
            </div>
            <div className='blob'>
                <img src={img} alt='imag'></img>
            </div>
            
            <div className='hero' id='whero'>
                <h1>
                    TRACK AND TRADE
                </h1>
                <h1 className='col'><span>CRYPTO CURRENCIES</span></h1>
            </div>
            <div className='box'>
            {post && post.bitcoin && (
            <div className='boxdata'>
              <img src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' alt='imag'></img>
              <p>
                Bitcoin <span id='btcchange' style={{ color: getColor(post.bitcoin.usd_24h_change)}}>{truncateToTwoDecimals(post.bitcoin.usd_24h_change)}&nbsp;%</span>
              </p>
              <p>
                $<span id='btcprice'>{post.bitcoin.usd}</span>
              </p>
            </div>
          )}

{post && post.ethereum && (
            <div className='boxdata'>
              <img src='https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880' alt='imag'></img>
              <p>
                Etherreum <span id='ethchange' style={{ color: getColor(post.ethereum.usd_24h_change)}}>{truncateToTwoDecimals(post.ethereum.usd_24h_change)}&nbsp;%</span>
              </p>
              <p>
                $<span id='ethprice'>{post.ethereum.usd}</span>
              </p>
            </div>
          )}

          {post && post.tether && (
            <div className='boxdata'>
              <img src='https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663' alt='imag'></img>
              <p>
                Tether  <span id='thtchange' style={{ color: getColor(post.tether.usd_24h_change)}}>{truncateToTwoDecimals(post.tether.usd_24h_change)}&nbsp;%</span>
              </p>
              <p>
                $<span id='thtprice'>{post.tether.usd}</span>
              </p>
            </div>
          )}

        {post && post.binancecoin && (
            <div className='boxdata'>
              <img src='https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850' alt='imag'></img>
              <p>
                BNB  <span id='thtchange' style={{ color: getColor(post.binancecoin.usd_24h_change)}}>{truncateToTwoDecimals(post.binancecoin.usd_24h_change)}&nbsp;%</span>
              </p>
              <p>
                $<span id='thtprice'>{post.binancecoin.usd}</span>
              </p>
            </div>
          )}

            
            </div>
            <div className='boxbutton'>
                <a className='hover1' onClick={() => scrollToSection('wmarket')}><button>See Prices</button></a>
            </div>
            
        </section>
        <Market/>
        <Choose/>
        <Join/>
        <Footer/>

        </>
    );
}


export default Hero;
