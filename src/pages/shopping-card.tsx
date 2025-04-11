import React, { useState, useEffect } from 'react';
import styles from './shopping-card.module.css';
import { useParams } from 'react-router-dom';
import { ProductImage } from '../components/product-image/product-image';
import { ProductDetailes } from '../components/product-detailes/product-detailes';
import { TColor, TInitialState } from '@utils/types';
import { getProduct, getProductColor } from '../services/api';
import { Preloader } from '../components/preloader/preloader';

export const ShoppingCard = (): React.JSX.Element => {
	const { productId: id } = useParams();
	const [selectedProduct, setSelectedProduct] = useState<TInitialState | null>(
		null
	);
	const [selectedColor, setSelectedColor] = useState<TColor | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		getProduct(id)
			.then((data) => {
				setSelectedProduct(data);
				if (data.colors.length > 0) {
					setSelectedColor(data.colors[0]);
				}
			})
			.catch((error) => setError(error.mesage))
			.finally(() => setIsLoading(false));
	}, [id]);

	if (isLoading) return <Preloader />;
	if (error) return <h1>Error</h1>;
	if (!selectedProduct) return <h1>Product not found</h1>;
	if (!selectedColor) return <h1>Color not found</h1>;

	const handleChooseColor = (productID: string, colorID: number): void => {
		getProductColor(productID, colorID)
			.then((data) => setSelectedColor(data))
			.catch((error) => console.error('Ошибка при загрузке продуктов:', error));
	};

	const { colors } = selectedProduct;
	const pathImage = selectedColor.images || colors[0].images;
	return (
		<div className={styles.container}>
			<ProductImage path={pathImage} />
			<ProductDetailes
				product={selectedProduct}
				color={selectedColor}
				onClick={handleChooseColor}
			/>
		</div>
	);
};
