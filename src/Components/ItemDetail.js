import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../Hooks/useItems';
import InventorySection from './HomePage/InventorySection';

const ItemDetail = () => {
    const [items, setItems] = useItems();
    console.log(items);
    const { id } = useParams();

    const { _id, name, description } = items;


    return (
        <div>
            <h3>Detail: {items.length}</h3>
            <div className="card mb-3 mx-auto" style={{ maxWidth: '75%' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ItemDetail;