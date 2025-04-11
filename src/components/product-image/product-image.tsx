import React, { useState, useEffect } from 'react';
import styles from './product-image.module.css';

type TProductImage = {
	path: string[];
};

export const ProductImage = ({ path }: TProductImage): React.JSX.Element => {
	const [mainImage, setMainImage] = useState(path[0]);

	useEffect(() => {
		setMainImage(path[0]);
	}, [path]);

	const handleMainImage = (image: string) => {
		setMainImage(image);
	};

	return (
		<section className={styles.container}>
			<img className={styles.imageMain} src={mainImage} alt='' />
			<div className={styles.footer}>
				{path.map((imagePath, index) => (
					<button
						key={index}
						type='button'
						tabIndex={0}
						onClick={() => handleMainImage(imagePath)}
						onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
							if ((e.key = 'enter')) handleMainImage(imagePath);
						}}
						className={styles.btn}>
						<img src={imagePath} alt='' className={styles.image} />
					</button>
				))}
			</div>
		</section>
	);
};
