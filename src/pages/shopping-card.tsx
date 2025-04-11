import React, { useState, useEffect } from 'react';
import styles from './shopping-card.module.css';
import { useParams } from 'react-router-dom';
import { ProductImage } from '../components/product-image/product-image';
import { ProductDetailes } from '../components/product-detailes/product-detailes';
import { TInitialState } from '@utils/types';
import { getProduct } from '../services/api';
import { Preloader } from '../components/preloader/preloader';

export const ShoppingCard = (): React.JSX.Element => {
	const { productId: id } = useParams();
	const [selectedProduct, setSelectedProduct] = useState<TInitialState | null>(
		null
	);

	useEffect(() => {
		getProduct(id)
			.then((data) => setSelectedProduct(data))
			.catch((error) => console.error('Ошибка при загрузке продуктов:', error));
	}, [id]);

	if (!selectedProduct) return <Preloader />;

	const { colors } = selectedProduct;
	return (
		<div className={styles.container}>
			<ProductImage path={colors[0].images} />
			<ProductDetailes />
		</div>
	);
};
