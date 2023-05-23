import React from 'react';
import { Link } from 'react-router-dom';
import './Datapage.css';

const Datapage2 = () => {
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
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422' alt='imgdata'></img>
                        Solana
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066' alt='imgdata'></img>
                        TRON
                    </span>
                    <p className='price'>$1.855.85</p>
                    <p className='change'>1.31%</p>
                    <p className='mcap'>$221,877,507,130</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580' alt='imgdata'></img>
                        Litecoin
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644' alt='imgdata'></img>
                        Polkadot
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766' alt='imgdata'></img>
                        Binance USD
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446' alt='imgdata'></img>
                        Shiba Inu
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1670992574' alt='imgdata'></img>
                        Avalanche
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/9956/large/4943.png?1636636734' alt='imgdata'></img>
                        Dai
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744' alt='imgdata'></img>
                        Wrapped Bitcoin
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604' alt='imgdata'></img>
                        Uniswap
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
            </div>

        </section>
            <div className='pagin'>
                <Link to='/'><div className='circle'><span>1</span></div></Link>
                <Link to='/datapage2'><div className='circle active'><span>2</span></div></Link>
                <Link to='/datapage3'><div className='circle'><span>3</span></div></Link>
                <Link to='/datapage4'><div className='circle'><span>4</span></div></Link>
                <Link to='/datapage5'><div className='circle'><span>5</span></div></Link>
            </div>
        </>
    );
}

export default Datapage2;
