import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = (props) => {
    const { _id, name, img, description, price, quantity, supplier } = props.item;
    const navigate = useNavigate()
    const handleManageInventory = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <div className="card-group shadow rounded" style={{ width: '370px' }}>
                <div className="card p-4" >
                    <img src={img} style={{ height: '160px' }} className="card-img-top w-75 mx-auto img-fluid rounded" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title text-center">{name}</h6>
                        <p className="card-text">{description.slice(0, 50)}<span className='text-secondary'> . . . Read more</span></p>
                        <p className="card-text">Price: ${price}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">Supplier: {supplier}</p>

                    </div>
                    <div className="card-footer border-top-0 bg-transparent">
                        <button style={{ height: '40px', backgroundColor: 'var(--blue)' }} className='border-0 mx-auto d-block w-100 text-white rounded shadow-sm rounded' onClick={() => handleManageInventory(_id)}>Manage</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Item;