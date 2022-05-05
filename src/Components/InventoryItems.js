import React, { useState, useEffect } from 'react';
import Item from './Item';

const InventoryItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2>Inventory Items</h2>
            <div className="inventory-items">
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;