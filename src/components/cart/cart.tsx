import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
	const deleteItem = (id: string) => {
		if (items.length === 1) {
			localStorage.removeItem('cart');
			setItems([]);
		} else {
			const newItems = items.filter((item) => item.id !== id);
			setItems(newItems);
			localStorage.setItem('cart', JSON.stringify(newItems));
		}
	};
	return (
		<div className={styles.container}>
			<button className={styles.back} onClick={backward}>
				Назад
			</button>
			<div className={styles.items}>
				{items && items.length > 0 ? (
					items.map((item) => (
						<CartItem key={item.id} {...item} deleteItem={deleteItem} />
					))
				) : (
					<div className={styles.emptyContainer}>
						<p className={styles.empty}>Корзина пуста</p>
						<Link to='/'>На главную</Link>
					</div>
				)}
			</div>
		</div>
	);
};
