import styles from './card.module.scss';
import React from 'react';

type TCardProps = {
	path: string;
	name: string;
};

export const Card = ({ path, name }: TCardProps): React.JSX.Element => {
	return (
		<div className={styles.container}>
			<img className={styles.img} src={path} alt={name} />
			<h1>{name}</h1>
		</div>
	);
};
