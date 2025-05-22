import React, { useEffect, useState } from 'react';
import styles from './cart.module.css';
import { TCartItem } from '@utils/types';
import { CartItem } from '../cart-item/cart-item';

export const Cart = (): React.JSX.Element => {
	const [items, setItems] = useState<TCartItem[]>([]);
	useEffect(() => {
		const lsItems = localStorage.getItem('cart');
		if (lsItems) {
			setItems(JSON.parse(lsItems));
		}
	}, []);
	return (
		<div className={styles.container}>
			<button>Назад</button>
			<div className={styles.items}>
				{items.map((item, index) => (
					<CartItem key={index} {...item} />
				))}
			</div>
		</div>
	);
};
