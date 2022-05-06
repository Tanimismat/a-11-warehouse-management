import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import InventorySection from './InventorySection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <InventorySection></InventorySection>
            <button className='d-block mx-auto'>Manage Inventories</button>
            <Footer></Footer>
        </div>
    );
};

export default Home;