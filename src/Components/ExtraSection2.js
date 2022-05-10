import React from 'react';

const ExtraSection2 = () => {
    return (
        <div className='extraSection2 w-75 mx-auto border my-3 shadow rounded'>
            <h5 className='text-center my-3 p-3'>SEARCH OUR INVENTORY</h5>

            <div className='d-flex my-4'>
                <div className='mx-3'>
                    <div className='d-flex'>
                        <input className='fieldStyle' type="number" placeholder='Min Year' />
                        <p className='mx-1 my-0 p-0'>to</p>
                        <input className='fieldStyle' type="number" placeholder='Max Year' />
                    </div>
                    <input className='d-block fieldStyle' type="text" placeholder='Body Style' />
                    <input className='d-block fieldStyle' type="text" placeholder='Model' />
                    <input className='d-block fieldStyle' type="text" placeholder='Make' />
                </div>
                <div style={{ width: '1px', heitht: '100px', backgroundColor: 'lightgray' }} className=' me-3'></div>
                <div>
                    <div className='d-flex'>
                        <input className='fieldStyle' type="number" placeholder='Min Price' />
                        <p className='mx-1'>to</p>
                        <input className='fieldStyle' type="number" placeholder='Max price' />
                    </div>
                    <div className='d-flex'>
                        <input className='fieldStyle' type="number" placeholder='Min Milage' />
                        <p className='mx-1'>to</p>
                        <input className='fieldStyle' type="number" placeholder='Max Milage' />
                    </div>
                    <input className='d-block fieldStyle' type="text" placeholder='Transmission' />
                    <input className='d-block fieldStyle' type="text" placeholder='Refine your keywords' />

                </div>
            </div>
            <div className='d-flex justify-content-evenly mb-4'>
                <span>
                    <input className='mx-2' type="checkbox" name="Certified" id="Certified" />
                    <label htmlFor="">Certified</label>
                </span>
                <span>
                    <input className='mx-2' type="checkbox" name="Certified" id="Certified" />
                    <label htmlFor="">Brand New</label>
                </span>
                <button style={{ width: '200px', height: '40px', backgroundColor: 'var(--blue)' }} className='border-0 rounded text-white'>Find New Vehicle</button>
            </div>
        </div>
    );
};

export default ExtraSection2;