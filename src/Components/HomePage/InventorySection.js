import React from 'react';
import useItems from '../../Hooks/useItems';
import Item from '../Item';

const InventorySection = () => {
    const [items] = useItems();
    console.log(items);
    const { id } = items;
    return (
        <div className='inventory-items'>
            {
                items.map(item => <Item key={id} item={item}></Item>).slice(1, 7)
            }
        </div>
    );
};

export default InventorySection;