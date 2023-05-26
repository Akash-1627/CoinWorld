import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './Datapage.css';

const baseURL = "https://api.coingecko.com/api/v3/simple/price?ids=solana%2Ctron%2Cpolkadot%2Clitecoin%2Cbinance-usd%2Cshiba-inu%2Cavalanche-2%2Cdai%2Cwrapped-bitcoin%2Cuniswap&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&precision=2";
const Datapage2 = () => {

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
                {post && post.solana && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422' alt='imgdata'></img>
                        Solana
                    </span>
                    <p className='price'>${post.solana.usd}</p>
                    <p className='change' style={{ color: getColor(post.solana.usd_24h_change)}}>{truncateToTwoDecimals(post.solana.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.solana.usd_market_cap)}</p>
                </a>
                )}
                {post && post.tron && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066' alt='imgdata'></img>
                        TRON
                    </span>
                    <p className='price'>${post.tron.usd}</p>
                    <p className='change' style={{ color: getColor(post.tron.usd_24h_change)}}>{truncateToTwoDecimals(post.tron.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.tron.usd_market_cap)}</p>
                </a>
                )}
                {post && post.litecoin && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580' alt='imgdata'></img>
                        Litecoin
                    </span>
                    <p className='price'>${post.litecoin.usd}</p>
                    <p className='change' style={{ color: getColor(post.litecoin.usd_24h_change)}}>{truncateToTwoDecimals(post.litecoin.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.litecoin.usd_market_cap)}</p>
                </a>
                )}
                {post && post.polkadot && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644' alt='imgdata'></img>
                        Polkadot
                    </span>
                    <p className='price'>${post.polkadot.usd}</p>
                    <p className='change' style={{ color: getColor(post.polkadot.usd_24h_change)}}>{truncateToTwoDecimals(post.polkadot.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.polkadot.usd_market_cap)}</p>
                </a>
                )}
                {post && post['binance-usd'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766' alt='imgdata'></img>
                        Binance USD
                    </span>
                    <p className='price'>${post['binance-usd'].usd}</p>
                    <p className='change' style={{ color: getColor(post['binance-usd'].usd_24h_change)}}>{truncateToTwoDecimals(post['binance-usd'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['binance-usd'].usd_market_cap)}</p>
                </a>
                )}
                {post && post['shiba-inu'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446' alt='imgdata'></img>
                        Shiba Inu
                    </span>
                    <p className='price'>${post['shiba-inu'].usd}</p>
                    <p className='change' style={{ color: getColor(post['shiba-inu'].usd_24h_change)}}>{truncateToTwoDecimals(post['shiba-inu'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['shiba-inu'].usd_market_cap)}</p>
                </a>
                )}
                {post && post['avalanche-2'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1670992574' alt='imgdata'></img>
                        Avalanche
                    </span>
                    <p className='price'>${post['avalanche-2'].usd}</p>
                    <p className='change' style={{ color: getColor(post['avalanche-2'].usd_24h_change)}}>{truncateToTwoDecimals(post['avalanche-2'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['avalanche-2'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.dai && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/9956/large/4943.png?1636636734' alt='imgdata'></img>
                        Dai
                    </span>
                    <p className='price'>${post.dai.usd}</p>
                    <p className='change' style={{ color: getColor(post.dai.usd_24h_change)}}>{truncateToTwoDecimals(post.dai.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.dai.usd_market_cap)}</p>
                </a>
                )}
                {post && post['wrapped-bitcoin'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744' alt='imgdata'></img>
                        Wrapped Bitcoin
                    </span>
                    <p className='price'>${post['wrapped-bitcoin'].usd}</p>
                    <p className='change' style={{ color: getColor(post['wrapped-bitcoin'].usd_24h_change)}}>{truncateToTwoDecimals(post['wrapped-bitcoin'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['wrapped-bitcoin'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.uniswap && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604' alt='imgdata'></img>
                        Uniswap
                    </span>
                    <p className='price'>${post.uniswap.usd}</p>
                    <p className='change' style={{ color: getColor(post.uniswap.usd_24h_change)}}>{truncateToTwoDecimals(post.uniswap.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.uniswap.usd_market_cap)}</p>
                </a>
                )}
            </div>

        </section>
            <div className='pagin'>
                <Link to='/' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>1</span></div></Link>
                <Link to='/datapage2' onClick={() => scrollToSection('wmarket')}><div className='circle active'><span>2</span></div></Link>
                <Link to='/datapage3' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>3</span></div></Link>
                <Link to='/datapage4' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>4</span></div></Link>
                <Link to='/datapage5' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>5</span></div></Link>
            </div>
        </>
    );
}

export default Datapage2;
