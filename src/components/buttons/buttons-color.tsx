import { TColor } from '@utils/types';
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import styles from './buttons-color.module.css';

type TButtonsColorProps = {
	colors: TColor[];
	handleChooseColor: (productId: string, colorId: number) => void;
};

export const ButtonsColor = ({
	colors,
	handleChooseColor,
}: TButtonsColorProps): React.JSX.Element => {
	const { productId: id } = useParams();
	if (!id) return <Navigate to='/' />;

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Цвет</h3>
			<div className={styles.btns}>
				{colors.map((item, index) => (
					<button
						className={styles.btn}
						type='button'
						key={index}
						onClick={() => {
							handleChooseColor(id, item.id);
						}}>
						<div
							className={styles.circle}
							style={{
								backgroundColor: item.name,
							}}></div>
					</button>
				))}
			</div>
		</div>
	);
};
