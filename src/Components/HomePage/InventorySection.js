import React from 'react';
import useItems from '../../Hooks/useItems';
import Item from '../Item';
import Loading from '../Loading';

const InventorySection = () => {
    const [items] = useItems();
    console.log(items);
    const { _id } = items;

    return (
        <div className='inventory-items'>

            {
                items.map(item => <Item key={_id} item={item}></Item>).slice(1, 7)
            }

        </div>
    );
};

export default InventorySection;