import React, { useState, useEffect } from 'react';
import s from './app.module.scss';
import { TInitialState } from '@utils/types';
import { getProducts } from '../../services/api';
import { Card } from '../card/card';

export const App = (): React.JSX.Element => {
	const [products, setProducts] = useState<TInitialState[]>([]);

	useEffect(() => {
		getProducts()
			.then((data) => setProducts(data))
			.catch((error) => console.error('Ошибка при загрузке продуктов:', error));
	}, []);
	return (
		<div className={s.container}>
			{products.map((item, index) => (
				<Card key={index} name={item.name} path={item.colors[0].images[0]} />
			))}
		</div>
	);
};
