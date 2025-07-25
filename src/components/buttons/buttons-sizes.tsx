import { TSize } from '@utils/types';
import React from 'react';
import styles from './buttons-sizes.module.css';

type TButtonsSizeProps = {
	sizes: TSize[];
	enableSizes: number[];
	handleChooseSize: (sizeId: number) => void;
};

export const ButtonsSizes = ({
	sizes,
	enableSizes,
	handleChooseSize,
}: TButtonsSizeProps): React.JSX.Element => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Размер</h3>
			<div className={styles.btns}>
				{sizes.map((size, index) => (
					<button
						className={styles.btn}
						type='button'
						key={index}
						onClick={() => {
							handleChooseSize(size.id);
						}}
						disabled={!enableSizes.includes(size.id)}>
						{size.label}/{size.number}
					</button>
				))}
			</div>
		</div>
	);
};
