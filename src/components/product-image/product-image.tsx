import React from 'react';
import styles from './product-image.module.css';

type TProductImage = {
	path: string;
};

export const ProductImage = ({ path }: TProductImage): React.JSX.Element => {
	return (
		<section className={styles.container}>
			<img className={styles.image} src={path} alt='' />
			<div className={styles.footer}>
				<img className={styles.image} src={path} alt='' />
				<img className={styles.image} src={path} alt='' />
			</div>
		</section>
	);
};
