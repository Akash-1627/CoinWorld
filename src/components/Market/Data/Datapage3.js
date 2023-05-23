import React from 'react';
import { Link } from 'react-router-dom';
import './Datapage.css';

const Datapage3 = () => {
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
                        <img src='https://assets.coingecko.com/coins/images/3449/large/tusd.png?1618395665' alt='imgdata'></img>
                        TrueUSD
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/12817/large/filecoin.png?1602753933' alt='imgdata'></img>
                        Filecoin
                    </span>
                    <p className='price'>$1.855.85</p>
                    <p className='change'>1.31%</p>
                    <p className='mcap'>$221,877,507,130</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/13573/large/Lido_DAO.png?1609873644' alt='imgdata'></img>
                        Lido DAO
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/26455/large/aptos_round.png?1666839629' alt='imgdata'></img>
                        Aptos
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/3688/large/hbar.png?1637045634' alt='imgdata'></img>
                        Hedera
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/7310/large/cro_token_logo.png?1669699773' alt='imgdata'></img>
                        Cronos
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg?1680097630' alt='imgdata'></img>
                        Arbitrum
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/3370/large/5ZOu7brX_400x400.jpg?1612437252' alt='imgdata'></img>
                        Quant
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/10365/large/near.jpg?1683515160' alt='imgdata'></img>
                        NEAR Protocol
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/1167/large/VET_Token_Icon.png?1680067517' alt='imgdata'></img>
                        VeChain
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
            </div>

        </section>
            <div className='pagin'>
                <Link to='/'><div className='circle'><span>1</span></div></Link>
                <Link to='/datapage2'><div className='circle'><span>2</span></div></Link>
                <Link to='/datapage3'><div className='circle active'><span>3</span></div></Link>
                <Link to='/datapage4'><div className='circle'><span>4</span></div></Link>
                <Link to='/datapage5'><div className='circle'><span>5</span></div></Link>
            </div>
        </>
    );
}

export default Datapage3;
