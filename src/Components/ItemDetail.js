import React from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../Hooks/useItems';

const ItemDetail = () => {
    const { id } = useParams();
    // const [item] = useItems();
    // console.log(item);
    return (
        <div>
            <h3>Detail: {id}</h3>

        </div>
    );
};

export default ItemDetail;