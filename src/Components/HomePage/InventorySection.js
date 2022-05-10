import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import Item from '../Item';

const InventorySection = () => {
    const [items] = useItems();
    const { _id } = items;

    return (
        <div className='pb-2'>
            <div className='inventory-items'>
                {
                    items.map(item => <Item key={_id} item={item}></Item>).slice(1, 7)
                }
            </div>
            <button style={{ height: '40px', backgroundColor: 'var(--blue)' }} className='d-block mx-auto border-0 mb-5 w-25 rounded'><Link to='/inventory/:id' className='text-decoration-none text-white '>Manage Inventories</Link></button>
        </div>
    );
};

export default InventorySection;