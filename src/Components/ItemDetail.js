import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../Hooks/useItems';

const ItemDetail = () => {
    // const [item] = useItems();
    // const { id } = useParams();

    // console.log(item);
    // const { img, name, description } = item;

    const [item, setitem] = useState();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setitem(data))
    }, [])

    return (
        <div>
            <h3>Detail: {item.id}</h3>
            <div className="card mb-3 mx-auto" style={{ maxWidth: '75%' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        {/* <img src={img} className="img-fluid rounded-start" alt="..." /> */}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            {/* <h5 className="card-title">{name}</h5> */}
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