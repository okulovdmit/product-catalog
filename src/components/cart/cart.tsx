import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './cart.module.css';
import { TCartItem } from '@utils/types';
import { CartItem } from '../cart-item/cart-item';

type TCartProps = {
	deleteItem: (id: string) => void;
	cart: TCartItem[];
};
export const Cart = ({ deleteItem, cart }: TCartProps): React.JSX.Element => {
	const navigate = useNavigate();
	const [items, setItems] = useState<TCartItem[]>(cart);
	useEffect(() => {
		setItems(cart);
	}, [cart]);
	const backward = () => {
		navigate(-1);
	};

	return (
		<div className={styles.container}>
			<button className={styles.back} onClick={backward}>
				Назад
			</button>
			<div className={styles.items}>
				{items && items.length > 0 ? (
					items.map((item) => (
						<CartItem
							key={item.id}
							{...item}
							deleteItem={() => deleteItem(item.id)}
						/>
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
