import React from 'react';
import styles from './cart-item.module.css';
import { TCartItem } from '@utils/types';

type TCartItemProps = TCartItem & {
	deleteItem: (id: string) => void;
};
export const CartItem = ({
	image,
	name,
	color,
	size,
	price,
	id,
	deleteItem,
}: TCartItemProps): React.JSX.Element => {
	const namedColor =
		color === '#000000'
			? 'Черный'
			: color === '#FFFFFF'
			? 'Белый'
			: color === '#808080'
			? 'Серый'
			: color === '#FFFF00'
			? 'Желтый'
			: 'Синий';
	return (
		<div className={styles.container}>
			<img
				src={image}
				alt={`${name}-${namedColor}-${size}`}
				className={styles.img}
			/>
			<p className={styles.name}>{name}</p>
			<p className={styles.color}>{namedColor}</p>
			<p className={styles.size}>{size}</p>
			<p className={styles.price}>{price}</p>
			<button type='button' onClick={() => deleteItem(id)}>
				Удалить
			</button>
		</div>
	);
};
