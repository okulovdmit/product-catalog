import React from 'react';
import styles from './cart-item.module.css';
import { TCartItem } from '@utils/types';

export const CartItem = ({
	image,
	name,
	color,
	size,
	price,
}: TCartItem): React.JSX.Element => {
	return (
		<div className={styles.container}>
			<img src={image} alt='' />
			<p>{name}</p>
			<p>{color}</p>
			<p>{size}</p>
			<p>{price}</p>
			<button>Удалить</button>
		</div>
	);
};
