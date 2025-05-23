import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './cart.module.css';
import { TCartItem } from '@utils/types';
import { CartItem } from '../cart-item/cart-item';

export const Cart = (): React.JSX.Element => {
	const navigate = useNavigate();
	const [items, setItems] = useState<TCartItem[]>([]);
	useEffect(() => {
		const lsItems = localStorage.getItem('cart');
		if (lsItems) {
			setItems(JSON.parse(lsItems));
		}
	}, []);
	const backward = () => {
		navigate(-1);
	};
	return (
		<div className={styles.container}>
			<button onClick={backward}>Назад</button>
			<div className={styles.items}>
				{items.map((item, index) => (
					<CartItem key={index} {...item} />
				))}
			</div>
		</div>
	);
};
