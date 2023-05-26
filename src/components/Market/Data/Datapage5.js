import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './Datapage.css';

const baseURL = "https://api.coingecko.com/api/v3/simple/price?ids=leo-token%2Cchainlink%2Ccosmos%2Cthe-open-network%2Cokb%2Cmonero%2Cethereum-classic%2Cstellar%2Cbitcoin-cash%2Cinternet-computer&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&precision=2";

const Datapage5 = () => {

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
                {post && post.chainlink && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700' alt='imgdata'></img>
                        Chainlink
                    </span>
                    <p className='price'>${post.chainlink.usd}</p>
                    <p className='change' style={{ color: getColor(post.chainlink.usd_24h_change)}}>{truncateToTwoDecimals(post.chainlink.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.chainlink.usd_market_cap)}</p>
                </a>
                )}
                {post && post['leo-token'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1558326215' alt='imgdata'></img>
                        LEO Token
                    </span>
                    <p className='price'>${post['leo-token'].usd}</p>
                    <p className='change' style={{ color: getColor(post['leo-token'].usd_24h_change)}}>{truncateToTwoDecimals(post['leo-token'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['leo-token'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.cosmos && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960' alt='imgdata'></img>
                        Cosmos Hub
                    </span>
                    <p className='price'>${post.cosmos.usd}</p>
                    <p className='change' style={{ color: getColor(post.cosmos.usd_24h_change)}}>{truncateToTwoDecimals(post.cosmos.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.cosmos.usd_market_cap)}</p>
                </a>
                )}
                {post && post['the-open-network'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png?1670498136' alt='imgdata'></img>
                        Toncoin
                    </span>
                    <p className='price'>${post['the-open-network'].usd}</p>
                    <p className='change' style={{ color: getColor(post['the-open-network'].usd_24h_change)}}>{truncateToTwoDecimals(post['the-open-network'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['the-open-network'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.okb && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/4463/large/WeChat_Image_20220118095654.png?1642471050' alt='imgdata'></img>
                        OKB
                    </span>
                    <p className='price'>${post.okb.usd}</p>
                    <p className='change' style={{ color: getColor(post.okb.usd_24h_change)}}>{truncateToTwoDecimals(post.okb.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.okb.usd_market_cap)}</p>
                </a>
                )}
                {post && post.monero && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729' alt='imgdata'></img>
                        Monero
                    </span>
                    <p className='price'>${post.monero.usd}</p>
                    <p className='change' style={{ color: getColor(post.monero.usd_24h_change)}}>{truncateToTwoDecimals(post.monero.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.monero.usd_market_cap)}</p>
                </a>
                )}
                {post && post['ethereum-classic'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1547034169' alt='imgdata'></img>
                        Ethereum Classic
                    </span>
                    <p className='price'>${post['ethereum-classic'].usd}</p>
                    <p className='change' style={{ color: getColor(post['ethereum-classic'].usd_24h_change)}}>{truncateToTwoDecimals(post['ethereum-classic'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['ethereum-classic'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.stellar && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157' alt='imgdata'></img>
                        Stellar
                    </span>
                    <p className='price'>${post.stellar.usd}</p>
                    <p className='change' style={{ color: getColor(post.stellar.usd_24h_change)}}>{truncateToTwoDecimals(post.stellar.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.stellar.usd_market_cap)}</p>
                </a>
                )}
                {post && post['bitcoin-cash'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492' alt='imgdata'></img>
                        Bitcoin Cash
                    </span>
                    <p className='price'>${post['bitcoin-cash'].usd}</p>
                    <p className='change' style={{ color: getColor(post['bitcoin-cash'].usd_24h_change)}}>{truncateToTwoDecimals(post['bitcoin-cash'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['bitcoin-cash'].usd_market_cap)}</p>
                </a>
                )}
                {post && post['internet-computer'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1620703073' alt='imgdata'></img>
                        Internet Computer
                    </span>
                    <p className='price'>${post['internet-computer'].usd}</p>
                    <p className='change' style={{ color: getColor(post['internet-computer'].usd_24h_change)}}>{truncateToTwoDecimals(post['internet-computer'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['internet-computer'].usd_market_cap)}</p>
                </a>
                )}
            </div>

        </section>
            <div className='pagin'>
                <Link to='/' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>1</span></div></Link>
                <Link to='/datapage2' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>2</span></div></Link>
                <Link to='/datapage3' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>3</span></div></Link>
                <Link to='/datapage4' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>4</span></div></Link>
                <Link to='/datapage5' onClick={() => scrollToSection('wmarket')}><div className='circle active'><span>5</span></div></Link>
            </div>
        </>
    );
}

export default Datapage5;
