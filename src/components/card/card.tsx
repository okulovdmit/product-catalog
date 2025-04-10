import styles from './card.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

type TCardProps = {
	path: string;
	name: string;
	id: number;
	setProduct: (id: number) => void;
};

export const Card = ({
	path,
	name,
	id,
	setProduct,
}: TCardProps): React.JSX.Element => {
	return (
		<Link key={id} to={`/products/${id}`} discover='none'>
			<div
				aria-hidden='true'
				className={styles.container}
				onClick={() => setProduct(id)}>
				<img className={styles.img} src={path} alt={name} />
				<h1>{name}</h1>
			</div>
		</Link>
	);
};
