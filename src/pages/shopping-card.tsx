import React, { useState, useEffect } from 'react';
import styles from './shopping-card.module.css';
import { useParams } from 'react-router-dom';
import { ProductImage } from '../components/product-image/product-image';
import { ProductDetailes } from '../components/product-detailes/product-detailes';
import { TColor, TInitialState, TSize } from '@utils/types';
import {
	getProduct,
	getProductColor,
	getSize,
	getSizes,
} from '../services/api';
import { Preloader } from '../components/preloader/preloader';

export const ShoppingCard = (): React.JSX.Element => {
	const { productId: id } = useParams();
	const [selectedProduct, setSelectedProduct] = useState<TInitialState | null>(
		null
	);
	const [selectedColor, setSelectedColor] = useState<TColor | null>(null);
	const [sizes, setSizes] = useState<TSize[]>([]);
	const [selectedSize, setSelectedSize] = useState<number[]>([]);
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

	useEffect(() => {
		getSizes()
			.then((data) => setSizes(data))
			.catch((error) => setError(error.message));
	});

	if (isLoading) return <Preloader />;
	if (error) return <h1>{selectedSize}</h1>; // return later
	if (!selectedProduct) return <h1>Product not found</h1>;
	if (!selectedColor) return <h1>Color not found</h1>;

	const handleChooseColor = (productID: string, colorID: number): void => {
		getProductColor(productID, colorID)
			.then((data) => setSelectedColor(data))
			.catch((error) => console.error('Ошибка при загрузке продуктов:', error));
	};

	const handleChooseSize = (sizeId: number): void => {
		getSize(sizeId)
			.then((data) => setSelectedSize(data))
			.catch((error) => console.error('Ошибка при загрузке продуктов:', error));
	};

	const { colors } = selectedProduct;
	const pathImage = selectedColor.images || colors[0].images;
	return (
		<div className={styles.container}>
			<ProductImage path={pathImage} />
			<ProductDetailes
				product={selectedProduct}
				sizes={sizes}
				color={selectedColor}
				handleChooseColor={handleChooseColor}
				handleChooseSize={handleChooseSize}
			/>
		</div>
	);
};
