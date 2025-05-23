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
	console.log(name);
	return (
		<div className={styles.container}>
			<img src={image} alt='' className={styles.img} />
			<p>{name}</p>
			<p>{color}</p>
			<p>{size}</p>
			<p>{price}</p>
			<button>Удалить</button>
		</div>
	);
};
