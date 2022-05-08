import React from 'react';
import useItems from '../../Hooks/useItems';
import Item from '../Item';
import Loading from '../Loading';

const InventorySection = () => {
    const [items] = useItems();
    console.log(items);
    const { id } = items;

    // if (loading) {
    //     return 
    // }
    return (
        <div className='inventory-items'>
            {/* <Loading></Loading> */}
            {
                items.map(item => <Item key={id} item={item}></Item>).slice(1, 7)
            }

        </div>
    );
};

export default InventorySection;