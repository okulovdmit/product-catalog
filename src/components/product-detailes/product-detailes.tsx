import React from 'react';
import styles from './product-detailes.module.css';
import { Link } from 'react-router-dom';
import { Characteristics } from '../characteristics/characteristics';
import { TColor, TInitialState, TSize } from '@utils/types';

type TProductDetailes = {
	product: TInitialState;
	sizes: TSize[];
	color: TColor;
	handleChooseColor: (productId: string, colorId: number) => void;
	handleChooseSize: (sizeId: number) => void;
	handleChooseTShirt: () => void;
};

export const ProductDetailes = ({
	product,
	sizes,
	color,
	handleChooseColor,
	handleChooseSize,
	handleChooseTShirt,
}: TProductDetailes): React.JSX.Element => {
	const cart = localStorage.getItem('cart');
	const { colors } = product;
	const { price, description, sizes: enableSizes } = color;
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
				<div className={styles.features}>
					<Characteristics
						sizes={sizes}
						enableSizes={enableSizes}
						colors={colors}
						handleChooseSize={handleChooseSize}
						handleChooseColor={handleChooseColor}
					/>
					<div className={styles.cart}>
						{cart && (
							<Link to='/cart' className={styles.link}>
								<button>В корзину</button>
							</Link>
						)}
						<button className={styles.button} onClick={handleChooseTShirt}>
							Добавить в корзину
						</button>
					</div>
				</div>
			</div>
			<div className={styles.footer}></div>
		</section>
	);
};
