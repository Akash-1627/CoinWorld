import React from 'react';
import './Choose.css';
import image from '../../Images/bitcoinholder.png';

const Choose = () => {
    return (
        <>
        <section className='choose' id='wchoose'>
            <h1 className='title'>WHY CHOOSE US</h1>
            <div className='boxit'>
                <div className='boxleft'>
                    <div className='boxval'>
                        <div className='image'>
                            <div className='imga'>

                                <i className='bx bx-broadcast'></i>
                            </div>
                        </div>
                        <div className='boxdataa'>
                            <h2 className='heading'>RECEIVE YOUR OWN NFT</h2>
                            <p className='value'>Invest all your crypto at one place on one platform.</p>
                        </div>
                    </div>

                    <div className='boxval'>
                        <div className='image'>
                            <div className='imga'>

                            <i className='bx bxs-store'></i>
                            </div>
                        </div>
                        <div className='boxdataa'>
                            <h2 className='heading'>TAKE A MARKET TO SELL</h2>
                            <p className='value'>Discover the right crypto collections to buy or sell.</p>
                        </div>
                    </div>

                    <div className='boxval'>
                        <div className='image'>
                            <div className='imga'>

                            <i className='bx bxs-collection'></i>
                            </div>
                        </div>
                        <div className='boxdataa'>
                            <h2 className='heading'>DRIVE YOUR COLLECTION</h2>
                            <p className='value'>We make it easy to Discover, Invest and manage.</p>
                        </div>
                    </div>
                    
                </div>
                <div className='boxmid'>
                    <img src={image} alt='imgdata'></img>
                </div>
                <div className='boxright'>
                <div className='boxval'>
                        <div className='image'>
                            <div className='imga'>

                            <i className='bx bxs-wallet'></i>
                            </div>
                        </div>
                        <div className='boxdataa'>
                            <h2 className='heading'>CONNECT YOUR WALLET</h2>
                            <p className='value'>Use Trust Wallet, Metamask or to connect to the app.</p>
                        </div>
                    </div>

                    <div className='boxval'>
                        <div className='image'>
                            <div className='imga'>

                            <i className='bx bxs-select-multiple'></i>
                            </div>
                        </div>
                        <div className='boxdataa'>
                            <h2 className='heading'>SELECT YOUR QUANTITY</h2>
                            <p className='value'>Upload your crypto and set a title, description and price.</p>
                        </div>
                    </div>

                    <div className='boxval'>
                        <div className='image'>
                            <div className='imga'>

                            <i className='bx bxs-credit-card'></i>
                            </div>
                        </div>
                        <div className='boxdataa'>
                            <h2 className='heading'>CONFIRM TRANSACTION</h2>
                            <p className='value'>Earn by selling your crypto on our marketplace.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Choose;
