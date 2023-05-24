import React from 'react';
import './Market.css';
import Datapage1 from './Data/Datapage1';


import { HashRouter as Router, Routes,Route } from 'react-router-dom';
import Datapage2 from './Data/Datapage2';
import Datapage3 from './Data/Datapage3';
import Datapage4 from './Data/Datapage4';
import Datapage5 from './Data/Datapage5';

const Market = () => {
    return (
        <Router>
        <section id="wmarket" className='market'>
            <h1>Market Update</h1>
            <Routes>
                <Route exact path='/' element={
                <Datapage1/>}>
                </Route>
                <Route  path='/datapage2' element={
                <Datapage2/>}>
                </Route>
                <Route  path='/datapage3' element={
                <Datapage3/>}>
                </Route>
                <Route  path='/datapage4' element={
                <Datapage4/>}>
                </Route>
                <Route  path='/datapage5' element={
                <Datapage5/>}>
                </Route>
                

            </Routes>

            

        </section>
        </Router>
    );
}

export default Market;
