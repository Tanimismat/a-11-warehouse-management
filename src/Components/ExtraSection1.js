import React from 'react';

const ExtraSection1 = () => {
    return (
        <div className='w-25 mx-auto border' >
            <div className='d-flex justify-content-evenly'>
                <h6>Upfront Price</h6>
                <h6>$147,598</h6>
            </div>
            <p>Explore Payment Option</p>
            <div style={{ height: '1.5px' }} className='bg-secondary mx-2'></div>
            <p>Message us</p>
            <div className='d-flex justify-content-around'>
                <input style={{ width: '140px' }} className='rounded' type="text" placeholder='First Name' />
                <input style={{ width: '140px' }} className='rounded' type="text" placeholder='Last Name' />
            </div>
            <div className='d-flex justify-content-around'>
                <input style={{ width: '140px' }} className='rounded' type="text" placeholder='Email' />
                <input style={{ width: '140px' }} className='rounded' type="text" placeholder='Phone' />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder='Check Availability' />
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </div>
            <textarea style={{ height: '100px' }} className='w-100' placeholder='Write us a message '></textarea>
            <button className='w-100'>SEND MESSAGE</button>
        </div>
    );
};

export default ExtraSection1;