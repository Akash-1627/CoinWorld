import React from 'react';
import './Datapage.css';
import { Link } from 'react-router-dom';

const Datapage1 = () => {
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
                        <img src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' alt='imgdata'></img>
                        Bitcoin
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880' alt='imgdata'></img>
                        Ethereum
                    </span>
                    <p className='price'>$1.855.85</p>
                    <p className='change'>1.31%</p>
                    <p className='mcap'>$221,877,507,130</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663' alt='imgdata'></img>
                        Tether
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850' alt='imgdata'></img>
                        BNB
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389' alt='imgdata'></img>
                        USD Coin
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731' alt='imgdata'></img>
                        XRP
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860' alt='imgdata'></img>
                        Cardano
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546' alt='imgdata'></img>
                        Lido Staked Ether
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256' alt='imgdata'></img>
                        Dogecoin
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912' alt='imgdata'></img>
                        Polygon
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
            </div>

        </section>
        <div className='pagin'>
            <Link to='/datapage1'><div className='circle active'><span>1</span></div></Link>
            <Link to='/datapage2'><div className='circle'><span>2</span></div></Link>
            <Link to='/datapage3'><div className='circle'><span>3</span></div></Link>
            <Link to='/datapage4'><div className='circle'><span>4</span></div></Link>
            <Link to='/datapage5'><div className='circle'><span>5</span></div></Link>
        </div>
        </>
    );
}

export default Datapage1;
