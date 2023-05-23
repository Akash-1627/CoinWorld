import React from 'react';
import { Link } from 'react-router-dom';
import './Datapage.css';

const Datapage5 = () => {
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
                        <img src='https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700' alt='imgdata'></img>
                        Chainlink
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1558326215' alt='imgdata'></img>
                        LEO Token
                    </span>
                    <p className='price'>$1.855.85</p>
                    <p className='change'>1.31%</p>
                    <p className='mcap'>$221,877,507,130</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960' alt='imgdata'></img>
                        Cosmos Hub
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png?1670498136' alt='imgdata'></img>
                        Toncoin
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/4463/large/WeChat_Image_20220118095654.png?1642471050' alt='imgdata'></img>
                        OKB
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729' alt='imgdata'></img>
                        Monero
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1547034169' alt='imgdata'></img>
                        Ethereum Classic
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157' alt='imgdata'></img>
                        Stellar
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492' alt='imgdata'></img>
                        Bitcoin Cash
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1620703073' alt='imgdata'></img>
                        Internet Computer
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
                <Link to='/datapage3'><div className='circle'><span>3</span></div></Link>
                <Link to='/datapage4'><div className='circle'><span>4</span></div></Link>
                <Link to='/datapage5'><div className='circle active'><span>5</span></div></Link>
            </div>
        </>
    );
}

export default Datapage5;
