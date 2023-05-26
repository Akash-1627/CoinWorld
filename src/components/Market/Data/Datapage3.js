import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './Datapage.css';

const baseURL = "https://api.coingecko.com/api/v3/simple/price?ids=true-usd%2Cfilecoin%2Clido-dao%2Chedera-hashgraph%2Captos%2Ccrypto-com-chain%2Cquant-network%2Cnear%2Carbitrum%2Cvechain&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&precision=2";
const Datapage3 = () => {

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
                {post && post['true-usd'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/3449/large/tusd.png?1618395665' alt='imgdata'></img>
                        TrueUSD
                    </span>
                    <p className='price'>${post['true-usd'].usd}</p>
                    <p className='change' style={{ color: getColor(post['true-usd'].usd_24h_change)}}>{truncateToTwoDecimals(post['true-usd'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['true-usd'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.filecoin && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/12817/large/filecoin.png?1602753933' alt='imgdata'></img>
                        Filecoin
                    </span>
                    <p className='price'>${post.filecoin.usd}</p>
                    <p className='change' style={{ color: getColor(post.filecoin.usd_24h_change)}}>{truncateToTwoDecimals(post.filecoin.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.filecoin.usd_market_cap)}</p>
                </a>
                )}
                {post && post['lido-dao'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/13573/large/Lido_DAO.png?1609873644' alt='imgdata'></img>
                        Lido DAO
                    </span>
                    <p className='price'>${post['lido-dao'].usd}</p>
                    <p className='change' style={{ color: getColor(post['lido-dao'].usd_24h_change)}}>{truncateToTwoDecimals(post['lido-dao'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['lido-dao'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.aptos && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/26455/large/aptos_round.png?1666839629' alt='imgdata'></img>
                        Aptos
                    </span>
                    <p className='price'>${post.aptos.usd}</p>
                    <p className='change' style={{ color: getColor(post.aptos.usd_24h_change)}}>{truncateToTwoDecimals(post.aptos.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.aptos.usd_market_cap)}</p>
                </a>
                )}
                {post && post['hedera-hashgraph'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/3688/large/hbar.png?1637045634' alt='imgdata'></img>
                        Hedera
                    </span>
                    <p className='price'>${post['hedera-hashgraph'].usd}</p>
                    <p className='change' style={{ color: getColor(post['hedera-hashgraph'].usd_24h_change)}}>{truncateToTwoDecimals(post['hedera-hashgraph'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['hedera-hashgraph'].usd_market_cap)}</p>
                </a>
                )}
                {post && post['crypto-com-chain'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/7310/large/cro_token_logo.png?1669699773' alt='imgdata'></img>
                        Cronos
                    </span>
                    <p className='price'>${post['crypto-com-chain'].usd}</p>
                    <p className='change' style={{ color: getColor(post['crypto-com-chain'].usd_24h_change)}}>{truncateToTwoDecimals(post['crypto-com-chain'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['crypto-com-chain'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.arbitrum && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg?1680097630' alt='imgdata'></img>
                        Arbitrum
                    </span>
                    <p className='price'>${post.arbitrum.usd}</p>
                    <p className='change' style={{ color: getColor(post.arbitrum.usd_24h_change)}}>{truncateToTwoDecimals(post.arbitrum.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.arbitrum.usd_market_cap)}</p>
                </a>
                )}
                {post && post['quant-network'] && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/3370/large/5ZOu7brX_400x400.jpg?1612437252' alt='imgdata'></img>
                        Quant
                    </span>
                    <p className='price'>${post['quant-network'].usd}</p>
                    <p className='change' style={{ color: getColor(post['quant-network'].usd_24h_change)}}>{truncateToTwoDecimals(post['quant-network'].usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post['quant-network'].usd_market_cap)}</p>
                </a>
                )}
                {post && post.near && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/10365/large/near.jpg?1683515160' alt='imgdata'></img>
                        NEAR Protocol
                    </span>
                    <p className='price'>${post.near.usd}</p>
                    <p className='change' style={{ color: getColor(post.near.usd_24h_change)}}>{truncateToTwoDecimals(post.near.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.near.usd_market_cap)}</p>
                </a>
                )}
                {post && post.vechain && (
                <a onClick={() => scrollToSection('wmarket')} className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/1167/large/VET_Token_Icon.png?1680067517' alt='imgdata'></img>
                        VeChain
                    </span>
                    <p className='price'>${post.vechain.usd}</p>
                    <p className='change' style={{ color: getColor(post.vechain.usd_24h_change)}}>{truncateToTwoDecimals(post.vechain.usd_24h_change)}%</p>
                    <p className='mcap'>${truncateToZeroDecimals(post.vechain.usd_market_cap)}</p>
                </a>
                )}
            </div>

        </section>
            <div className='pagin'>
                <Link to='/' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>1</span></div></Link>
                <Link to='/datapage2' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>2</span></div></Link>
                <Link to='/datapage3' onClick={() => scrollToSection('wmarket')}><div className='circle active'><span>3</span></div></Link>
                <Link to='/datapage4' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>4</span></div></Link>
                <Link to='/datapage5' onClick={() => scrollToSection('wmarket')}><div className='circle'><span>5</span></div></Link>
            </div>
        </>
    );
}

export default Datapage3;
