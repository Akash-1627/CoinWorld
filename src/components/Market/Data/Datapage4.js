import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './Datapage.css';

const baseURL = "https://api.coingecko.com/api/v3/simple/price?ids=apecoin%2Calgorand%2Cthe-graph%2Cpaxos-standard%2Cfrax%2Crender-token%2Cedgecoin-2%2Cthe-sandbox%2Ceos%2Cfantom&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&precision=2";
const Datapage4 = () => {

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
        
        
        if (typeof value === 'number') {
            
                truncatedVal = value.toFixed(0);
    
                return truncatedVal;
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
                {post && post.apecoin && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/24383/large/apecoin.jpg?1647476455' alt='imgdata'></img>
                        ApeCoin
                    </span>
                    <p className='price'>${post.apecoin.usd}</p>
                    <p className='change' style={{ color: getColor(post.apecoin.usd_24h_change)}}>{truncateToTwoDecimals(post.apecoin.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.apecoin.usd_market_cap)}</p>
                </a>
                )}
                {post && post.algorand && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725' alt='imgdata'></img>
                        Algorand
                    </span>
                    <p className='price'>${post.algorand.usd}</p>
                    <p className='change' style={{ color: getColor(post.algorand.usd_24h_change)}}>{truncateToTwoDecimals(post.algorand.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.algorand.usd_market_cap)}</p>
                </a>
                )}
                {post && post['the-graph'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/13397/large/Graph_Token.png?1608145566' alt='imgdata'></img>
                        The Graph
                    </span>
                    <p className='price'>${post['the-graph'].usd}</p>
                    <p className='change' style={{ color: getColor(post['the-graph'].usd_24h_change)}}>{truncateToTwoDecimals(post['the-graph'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['the-graph'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.fantom && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/4001/large/Fantom_round.png?1669652346' alt='imgdata'></img>
                        Fantom
                    </span>
                    <p className='price'>${post.fantom.usd}</p>
                    <p className='change' style={{ color: getColor(post.fantom.usd_24h_change)}}>{truncateToTwoDecimals(post.fantom.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.fantom.usd_market_cap)}</p>
                </a>
                )}
                {post && post['paxos-standard'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/6013/large/Pax_Dollar.png?1629877204' alt='imgdata'></img>
                        Pax Dollar
                    </span>
                    <p className='price'>${post['paxos-standard'].usd}</p>
                    <p className='change' style={{ color: getColor(post['paxos-standard'].usd_24h_change)}}>{truncateToTwoDecimals(post['paxos-standard'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['paxos-standard'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.frax && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/13422/large/FRAX_icon.png?1679886922' alt='imgdata'></img>
                        Frax
                    </span>
                    <p className='price'>${post.frax.usd}</p>
                    <p className='change' style={{ color: getColor(post.frax.usd_24h_change)}}>{truncateToTwoDecimals(post.frax.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.frax.usd_market_cap)}</p>
                </a>
                )}
                {post && post['edgecoin-2'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/14409/large/edgecoin_bank_logo-4_%281%29.png?1673251201' alt='imgdata'></img>
                        Edgecoin
                    </span>
                    <p className='price'>${post['edgecoin-2'].usd}</p>
                    <p className='change' style={{ color: getColor(post['edgecoin-2'].usd_24h_change)}}>{truncateToTwoDecimals(post['edgecoin-2'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['edgecoin-2'].usd_market_cap)}</p>
                </a>
                )}
                {post && post['render-token'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/11636/large/rndr.png?1638840934' alt='imgdata'></img>
                        Render
                    </span>
                    <p className='price'>${post['render-token'].usd}</p>
                    <p className='change' style={{ color: getColor(post['render-token'].usd_24h_change)}}>{truncateToTwoDecimals(post['render-token'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['render-token'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.eos && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481' alt='imgdata'></img>
                        EOS
                    </span>
                    <p className='price'>${post.eos.usd}</p>
                    <p className='change' style={{ color: getColor(post.eos.usd_24h_change)}}>{truncateToTwoDecimals(post.eos.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.eos.usd_market_cap)}</p>
                </a>
                )}
                {post && post['the-sandbox'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg?1597397942' alt='imgdata'></img>
                        The Sandbox
                    </span>
                    <p className='price'>${post['the-sandbox'].usd}</p>
                    <p className='change' style={{ color: getColor(post['the-sandbox'].usd_24h_change)}}>{truncateToTwoDecimals(post['the-sandbox'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['the-sandbox'].usd_market_cap)}</p>
                </a>
                )}
            </div>

        </section>
            <div className='pagin'>
                <Link to='/' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>1</span></div></Link>
                <Link to='/datapage2' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>2</span></div></Link>
                <Link to='/datapage3' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>3</span></div></Link>
                <Link to='/datapage4' onClick={() => scrollToSection('wmarket')}><div className='circle active'><span>4</span></div></Link>
                <Link to='/datapage5' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>5</span></div></Link>
            </div>
        </>
    );
}

export default Datapage4;
