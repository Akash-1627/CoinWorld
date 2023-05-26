import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';
import './Datapage.css';
import { Link } from 'react-router-dom';

const baseURL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cusd-coin%2Cripple%2Ccardano%2Cstaked-ether%2Cdogecoin%2Cmatic-network&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&precision=2";
const Datapage1 = () => {

    
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
    const truncateToZeroDecimals = (value) => {
        let truncatedVal;
        let formatval;
        
        
        if (typeof value === 'number') {
            
                truncatedVal = value.toFixed(0);
                formatval = truncatedVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
                return formatval;
            }
            return value;
        };

    const getColor = (value) => {
        if (value < 0) {
            return 'red';
        } else if (value > 0) {
            return '#0ecb81';
        } else {
            return '#0ecb81';
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
        <section className='datapage'>
            <div className='scroll'>
                
            
                <div className='head'>
                    <p className='coin'>Coin</p>
                    <p className='pric'>Price</p>
                    <p className='hourch'>24h Change</p>
                    <p className='mcp'>Market Cap</p>
                </div>
                {post && post.bitcoin && (
                
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' alt='imgdata'></img>
                        Bitcoin
                    </span>
                    <p className='price'>${post.bitcoin.usd}</p>
                    <p className='change' style={{ color: getColor(post.bitcoin.usd_24h_change)}}>{truncateToTwoDecimals(post.bitcoin.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.bitcoin.usd_market_cap)}</p>
                </a>
                )}
                
                {post && post.ethereum && (
                
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880' alt='imgdata'></img>
                        Ethereum
                    </span>
                    <p className='price'>${post.ethereum.usd}</p>
                    <p className='change' style={{ color: getColor(post.ethereum.usd_24h_change)}}>{truncateToTwoDecimals(post.ethereum.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.ethereum.usd_market_cap)}</p>
                </a>
                )}
                
                {post && post.tether && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663' alt='imgdata'></img>
                        Tether
                    </span>
                    <p className='price'>${post.tether.usd}</p>
                    <p className='change' style={{ color: getColor(post.tether.usd_24h_change)}}>{truncateToTwoDecimals(post.tether.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.tether.usd_market_cap)}</p>
                </a>
                )}
                {post && post.binancecoin && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850' alt='imgdata'></img>
                        BNB
                    </span>
                    <p className='price'>${post.binancecoin.usd}</p>
                    <p className='change' style={{ color: getColor(post.binancecoin.usd_24h_change)}}>{truncateToTwoDecimals(post.binancecoin.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.binancecoin.usd_market_cap)}</p>
                </a>
                )}
                {post && post['usd-coin'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389' alt='imgdata'></img>
                        USD Coin
                    </span>
                    <p className='price'>${post['usd-coin'].usd}</p>
                    <p className='change' style={{ color: getColor(post['usd-coin'].usd_24h_change)}}>{truncateToTwoDecimals(post['usd-coin'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['usd-coin'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.ripple && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731' alt='imgdata'></img>
                        XRP
                    </span>
                    <p className='price'>${post.ripple.usd}</p>
                    <p className='change' style={{ color: getColor(post.ripple.usd_24h_change)}}>{truncateToTwoDecimals(post.ripple.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.ripple.usd_market_cap)}</p>
                </a>
                )}
                {post && post.cardano && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860' alt='imgdata'></img>
                        Cardano
                    </span>
                    <p className='price'>${post.cardano.usd}</p>
                    <p className='change' style={{ color: getColor(post.cardano.usd_24h_change)}}>{truncateToTwoDecimals(post.cardano.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.cardano.usd_market_cap)}</p>
                </a>
                )}
                {post && post['staked-ether'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546' alt='imgdata'></img>
                        Lido Staked Ether
                    </span>
                    <p className='price'>${post['staked-ether'].usd}</p>
                    <p className='change' style={{ color: getColor(post['staked-ether'].usd_24h_change)}}>{truncateToTwoDecimals(post['staked-ether'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['staked-ether'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.dogecoin && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256' alt='imgdata'></img>
                        Dogecoin
                    </span>
                    <p className='price'>${post.dogecoin.usd}</p>
                    <p className='change' style={{ color: getColor(post.dogecoin.usd_24h_change)}}>{truncateToTwoDecimals(post.dogecoin.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.dogecoin.usd_market_cap)}</p>
                </a>
                )}
                {post && post['matic-network'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912' alt='imgdata'></img>
                        Polygon
                    </span>
                    <p className='price'>${post['matic-network'].usd}</p>
                    <p className='change' style={{ color: getColor(post['matic-network'].usd_24h_change)}}>{truncateToTwoDecimals(post['matic-network'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['matic-network'].usd_market_cap)}</p>
                </a>
                )}
            </div>

        </section>
        <div className='pagin'>
            <Link to='/' onClick={() => scrollToSection('wmarket')}><div className='circle active'><span>1</span></div></Link>
            <Link to='/datapage2' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>2</span></div></Link>
            <Link to='/datapage3' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>3</span></div></Link>
            <Link to='/datapage4' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>4</span></div></Link>
            <Link to='/datapage5' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>5</span></div></Link>
        </div>
        </>
    );
}

export default Datapage1;
