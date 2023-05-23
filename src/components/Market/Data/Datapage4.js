import React from 'react';
import { Link } from 'react-router-dom';
import './Datapage.css';

const Datapage4 = () => {
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
                        <img src='https://assets.coingecko.com/coins/images/24383/large/apecoin.jpg?1647476455' alt='imgdata'></img>
                        ApeCoin
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725' alt='imgdata'></img>
                        Algorand
                    </span>
                    <p className='price'>$1.855.85</p>
                    <p className='change'>1.31%</p>
                    <p className='mcap'>$221,877,507,130</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/13397/large/Graph_Token.png?1608145566' alt='imgdata'></img>
                        The Graph
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/4001/large/Fantom_round.png?1669652346' alt='imgdata'></img>
                        Fantom
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/6013/large/Pax_Dollar.png?1629877204' alt='imgdata'></img>
                        Pax Dollar
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/13422/large/FRAX_icon.png?1679886922' alt='imgdata'></img>
                        Frax
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/14409/large/edgecoin_bank_logo-4_%281%29.png?1673251201' alt='imgdata'></img>
                        Edgecoin
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/11636/large/rndr.png?1638840934' alt='imgdata'></img>
                        Render
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481' alt='imgdata'></img>
                        EOS
                    </span>
                    <p className='price'>$25,000.00</p>
                    <p className='change'>1.96%</p>
                    <p className='mcap'>$530,220,007,384</p>
                </a>
                <a href='/' className='data'>
                    <span>
                        <img src='https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg?1597397942' alt='imgdata'></img>
                        The Sandbox
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
                <Link to='/datapage4'><div className='circle active'><span>4</span></div></Link>
                <Link to='/datapage5'><div className='circle'><span>5</span></div></Link>
            </div>
        </>
    );
}

export default Datapage4;
