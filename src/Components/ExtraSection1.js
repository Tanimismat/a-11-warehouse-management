import React from 'react';

const ExtraSection1 = () => {
    return (
        <div style={{ marginTop: '70px', width: '400px' }} className=' mx-auto p-5 border rounded shadow rounded' >

            <h5 className='text-center mb-3'>Explore Payment Option</h5>

            <div style={{ height: '1.5px' }} className='bg-secondary mx-auto my-2 w-100'></div>

            <p className='my-2'>Message us</p>

            <div className='d-flex justify-content-around'>

                <input style={{ width: '140px' }} className='fieldStyle' type="text" placeholder='First Name' />

                <input style={{ width: '140px' }} className='fieldStyle' type="text" placeholder='Last Name' />

            </div>

            <div className='d-flex justify-content-around'>

                <input style={{ width: '140px' }} className='fieldStyle' type="text" placeholder='Email' />

                <input style={{ width: '140px' }} className='fieldStyle' type="text" placeholder='Phone' />

            </div>

            <div className="input-group my-2">
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
            <textarea style={{ height: '100px' }} className='w-100 my-2' placeholder='Write us a message '></textarea>
            <button style={{ width: '200px', height: '40px', backgroundColor: 'var(--blue)' }} className='border-0 rounded text-white w-100 '>SEND MESSAGE</button>
        </div>
    );
};

export default ExtraSection1;