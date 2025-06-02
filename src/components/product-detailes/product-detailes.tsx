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
	allowAddToCart: boolean;
};

export const ProductDetailes = ({
	product,
	sizes,
	color,
	handleChooseColor,
	handleChooseSize,
	handleChooseTShirt,
	allowAddToCart,
}: TProductDetailes): React.JSX.Element => {
	const { colors } = product;
	const { price, description, sizes: enableSizes } = color;
	const localCart = localStorage.getItem('cart') ?? '[]';
	const parsedLocalCart = JSON.parse(localCart);
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
				<Link to={'/'} className={styles.link__main}>
					На главную
				</Link>
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
						<Link to='/cart' className={styles.link}>
							<button type='button'>
								В корзину ({parsedLocalCart.length})
							</button>
						</Link>

						<button
							type='button'
							className={styles.button}
							onClick={handleChooseTShirt}
							disabled={allowAddToCart}>
							Добавить в корзину
						</button>
					</div>
				</div>
			</div>
			<div className={styles.footer}></div>
		</section>
	);
};
