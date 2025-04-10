import React from 'react';
import styles from './shopping-card.module.css';
import { ProductImage } from '../components/product-image/product-image';
import { ProductDetailes } from '../components/product-detailes/product-detailes';
import { TInitialState } from '@utils/types';
import { Preloader } from '../components/preloader/preloader';

type TShoppingCard = {
	product: TInitialState | null;
};

export const ShoppingCard = ({ product }: TShoppingCard): React.JSX.Element => {
	if (!product) return <Preloader />;
	const { colors } = product;
	return (
		<div className={styles.container}>
			<ProductImage path={colors[0].images[0]} />
			<ProductDetailes />
		</div>
	);
};
