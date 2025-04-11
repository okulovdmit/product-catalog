import { TColor } from '@utils/types';
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import styles from './buttons.module.css';

type TButtonsProps = {
	type: string;
	colors: TColor[];
	onClick: (productId: string, colorId: number) => void;
};

export const Buttons = ({
	type,
	colors,
	onClick,
}: TButtonsProps): React.JSX.Element => {
	const { productId: id } = useParams();
	if (!id) return <Navigate to='/' />;

	const circle = type === 'color' ? '50%' : '';
	const text = type === 'color' ? 'Цвет' : 'Размер';
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{text}</h3>
			<div className={styles.btns}>
				{colors.map((item, index) => (
					<button
						className={styles.btn}
						type='button'
						key={index}
						style={{ borderRadius: circle }}
						onClick={() => {
							onClick(id, item.id);
						}}>
						<div
							className={styles.circle}
							style={{
								backgroundColor: type === 'color' ? item.name : '',
								borderRadius: circle,
							}}></div>
					</button>
				))}
			</div>
		</div>
	);
};
