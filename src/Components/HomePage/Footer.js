import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='row g-0'>
            <div className='col-md-6'>
                <h6>Automotive</h6>
                <p>Copyright © {year}. All rights reserved.</p>
            </div>
            <div className='col-md-6 d-flex'>
                <div className='col-md-6'>
                    <p>Company</p>
                    <p>About us</p>
                    <p>Press</p>
                    <p>What's new</p>
                </div>
                <div className='col-md-6'>
                    <p>Connect</p>
                    <p>Shopify store</p>
                    <p>eBay store</p>
                    <p>BigCommerce store</p>
                    <p>All partners</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;