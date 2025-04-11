import React, { useState, useEffect } from 'react';
import s from './app.module.scss';
import { TInitialState } from '@utils/types';
import { getProducts } from '../../services/api';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, ShoppingCard } from '../../pages/index';

export const App = (): React.JSX.Element => {
	const location = useLocation();
	const background = location.state && location.state.background;
	const [products, setProducts] = useState<TInitialState[]>([]);

	useEffect(() => {
		getProducts()
			.then((data) => setProducts(data))
			.catch((error) => console.error('Ошибка при загрузке продуктов:', error));
	}, []);

	return (
		<div className={s.container}>
			<Routes location={background || location}>
				<Route path='/' element={<Home products={products} />} />
				<Route path='/products/:productId' element={<ShoppingCard />} />
			</Routes>
		</div>
	);
};
