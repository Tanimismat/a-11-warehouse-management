import React from 'react';

const ExtraSection2 = () => {
    return (
        <div className='w-75 mx-auto border'>
            <h6>SEARCH OUR INVENTORY</h6>
            <div className='d-flex'>
                <div>
                    <div className='d-flex'>
                        <input type="number" placeholder='Min Year' />
                        <p>to</p>
                        <input type="number" placeholder='Max Year' />
                    </div>
                    <input className='d-block w-50' type="text" placeholder='Body Style' />
                    <input className='d-block' type="text" placeholder='Model' />
                    <input className='d-block' type="text" placeholder='Make' />
                </div>
                <div>
                    <div className='d-flex'>
                        <input type="number" placeholder='Min Price' />
                        <p>to</p>
                        <input type="number" placeholder='Max price' />
                    </div>
                    <div className='d-flex'>
                        <input type="number" placeholder='Min Milage' />
                        <p>to</p>
                        <input type="number" placeholder='Max Milage' />
                    </div>
                    <input className='d-block w-50' type="text" placeholder='Transmission' />
                    <input className='d-block' type="text" placeholder='Refine your keywords' />

                </div>
            </div>
            <div className='d-flex justify-content-evenly'>
                <span>
                    <input type="checkbox" name="Certified" id="Certified" />
                    <label htmlFor="">Certified</label>
                </span>
                <span>
                    <input type="checkbox" name="Certified" id="Certified" />
                    <label htmlFor="">Brand New</label>
                </span>
                <button>Find New Vehicle</button>
            </div>
        </div>
    );
};

export default ExtraSection2;