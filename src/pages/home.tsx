import React from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';
import { Card } from '../components/card/card';
import { TInitialState } from '@utils/types';

type THomeProps = {
	products: TInitialState[];
};

export const Home = ({ products }: THomeProps): React.JSX.Element => {
	return (
		<div className={styles.container}>
			{products.map((item, index) => (
				<Card
					key={index}
					name={item.name}
					path={item.colors[0].images[0]}
					id={item.id}
				/>
			))}
			<Link to={'/cart'} className={styles.link}>
				Корзина
			</Link>
		</div>
	);
};
