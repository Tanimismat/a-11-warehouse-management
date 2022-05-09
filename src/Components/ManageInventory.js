import React from 'react';
import { useForm } from "react-hook-form";

const ManageInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };
    return (
        <div>
            <h6>Manage Inventory</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Description' {...register("description")} />
                <input placeholder='Price' type="number" {...register("price")} />
                <input placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value='Add new item' />
            </form>
        </div>
    );
};

export default ManageInventory;