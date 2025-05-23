import React, { useState, useEffect } from 'react';
import styles from './shopping-card.module.css';
import { useParams } from 'react-router-dom';
import { ProductImage } from '../components/product-image/product-image';
import { ProductDetailes } from '../components/product-detailes/product-detailes';
import { TCartItem, TColor, TInitialState, TSize } from '@utils/types';
import {
	getProduct,
	getProductColor,
	getSize,
	getSizes,
} from '../services/api';
import { Preloader } from '../components/preloader/preloader';

export const ShoppingCard = (): React.JSX.Element => {
	const { productId: id } = useParams();
	const cartLocal = localStorage.getItem('cart');
	const [selectedProduct, setSelectedProduct] = useState<TInitialState | null>(
		null
	);
	const [selectedColor, setSelectedColor] = useState<TColor | null>(null);
	const [sizes, setSizes] = useState<TSize[]>([]);
	const [selectedSize, setSelectedSize] = useState<TSize | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');
	const [cart, setCart] = useState<TCartItem[]>(
		cartLocal ? JSON.parse(cartLocal) : []
	);
	console.log(selectedSize);
	useEffect(() => {
		getProduct(id)
			.then((data) => {
				setSelectedProduct(data);
				if (data.colors.length > 0) {
					setSelectedColor(data.colors[0]);
				}
			})
			.catch((error) => setError(error.message))
			.finally(() => setIsLoading(false));
	}, [id]);

	useEffect(() => {
		getSizes()
			.then((data) => setSizes(data))
			.catch((error) => setError(error.message));
	});

	if (isLoading) return <Preloader />;
	if (error) return <h1>error</h1>;
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
	const handleChooseTShirt = () => {
		if (!selectedSize) {
			console.error('выберите размер');
			return;
		}
		const product: TCartItem = {
			image: pathImage[0],
			name: selectedProduct.name,
			color: selectedColor.name,
			size: selectedSize?.label,
			price: selectedColor.price,
		};
		console.log('add product', product);
		const updateCart = [...cart, product];
		setCart(updateCart);
		localStorage.setItem('cart', JSON.stringify(cart));
	};
	return (
		<div className={styles.container}>
			<ProductImage path={pathImage} />
			<ProductDetailes
				product={selectedProduct}
				sizes={sizes}
				color={selectedColor}
				handleChooseColor={handleChooseColor}
				handleChooseSize={handleChooseSize}
				handleChooseTShirt={handleChooseTShirt}
			/>
		</div>
	);
};
