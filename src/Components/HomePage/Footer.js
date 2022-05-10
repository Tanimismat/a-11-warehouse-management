import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='row g-0 footer responsiveFooter'>
            <div className='col-md-6'>
                <h4 className='text-warning'>Automotive</h4>
                <p>Copyright © {year}. All rights reserved.</p>
            </div>
            <div className='col-md-6 d-flex others'>
                <div className='col-md-6'>
                    <p className='fw-bold text-warning'>Company</p>
                    <p>About us</p>
                    <p>Press</p>
                    <p>What's new</p>
                </div>
                <div className='col-md-6'>
                    <p className='fw-bold text-warning'>Connect</p>
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