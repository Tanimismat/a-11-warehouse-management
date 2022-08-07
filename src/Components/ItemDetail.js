import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useItems from "../Hooks/useItems";

const ItemDetail = () => {
	const [items, setItems] = useItems();
	console.log(items);
	const { id } = useParams();
	const { _id, name, description, img, price, quantity, supplier } = items;

	useEffect(() => {
		const getItem = async () => {
			const found = await items.find((item) => item._id === id);
			console.log(found);
			found && setItems(found);
		};
		getItem();
	}, [items, id, setItems]);

	return (
		<div>
			<h3>Detail: {items.length}</h3>

			<div className="card mb-3 mx-auto" style={{ maxWidth: "75%" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={img} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h4 className="card-title">{name}</h4>
							<h5 className="card-title">Id: {_id}</h5>
							<p className="card-text">{description}</p>
							<p>Price: ${price}</p>
							<p>Quantity: {quantity}</p>
							<p>Supplier: {supplier}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
