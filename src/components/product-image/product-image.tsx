import React from 'react';
import styles from './product-image.module.css';

type TProductImage = {
	path: string;
};

export const ProductImage = ({ path }: TProductImage): React.JSX.Element => {
	return (
		<section className={styles.container}>
			<img src={path} alt='' />
			<div>
				<img src={path} alt='' />
				<img src={path} alt='' />
			</div>
		</section>
	);
};
