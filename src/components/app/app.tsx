import React, { useState, useEffect } from 'react';
import s from './app.module.scss';
import { TCartItem, TInitialState } from '@utils/types';
import { getProducts } from '../../services/api';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, ShoppingCard } from '../../pages/index';
import { Cart } from '../cart/cart';

export const App = (): React.JSX.Element => {
	const location = useLocation();
	const localCart = localStorage.getItem('cart');
	const initialCart = localCart ? JSON.parse(localCart) : [];
	const background = location.state && location.state.background;
	const [products, setProducts] = useState<TInitialState[]>([]);
	const [cart, setCart] = useState<TCartItem[]>(initialCart);

	useEffect(() => {
		getProducts()
			.then((data) => setProducts(data))
			.catch((error) => console.error('Ошибка при загрузке продуктов:', error));
	}, []);

	const addToCart = (product: TCartItem) => {
		const updateCart: TCartItem[] = [...cart, product];
		setCart(updateCart);
		localStorage.setItem('cart', JSON.stringify(updateCart));
	};

	return (
		<div className={s.container}>
			<Routes location={background || location}>
				<Route path='/' element={<Home products={products} />} />
				<Route
					path='/products/:productId'
					element={<ShoppingCard addToCart={addToCart} />}
				/>
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</div>
	);
};
