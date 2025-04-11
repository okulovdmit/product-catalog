import React from 'react';
import styles from './product-detailes.module.css';
import { Characteristics } from '../characteristics/characteristics';
import { TColor, TInitialState } from '@utils/types';

type TProductDetailes = {
	product: TInitialState;
	color: TColor;
	onClick: (productId: string, colorId: number) => void;
};

export const ProductDetailes = ({
	product,
	color,
	onClick,
}: TProductDetailes): React.JSX.Element => {
	const { colors } = product;
	const { price, description } = color;
	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<button type='button' disabled>
					Отложить
				</button>
				<button type='button' disabled>
					Сравнить
				</button>
				<img className={styles.item} src='' alt='logo' />
			</div>

			<div className={styles.content}>
				<div className={styles.description}>
					<p className={styles.price}>
						<span className={styles.highlight}>{price}</span> руб./шт
					</p>
					<p>{description}</p>
				</div>
				<div className={styles.feutures}>
					<Characteristics colors={colors} onClick={onClick} />
					{/* <Cart /> */}
				</div>
			</div>
			<div className={styles.footer}></div>
		</section>
	);
};
