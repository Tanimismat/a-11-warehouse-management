import React from 'react';
import ExtraSection1 from '../ExtraSection1';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import InventorySection from './InventorySection';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <InventorySection></InventorySection>
            <button className='d-block mx-auto'>Manage Inventories</button>
            <ExtraSection1></ExtraSection1>

        </div>
    );
};

export default Home;