import React from 'react';
import { Card } from '../components/card/card';
import { TInitialState } from '@utils/types';

type THomeProps = {
	products: TInitialState[];
	setProduct: (id: number) => void;
};

export const Home = ({
	products,
	setProduct,
}: THomeProps): React.JSX.Element => {
	return (
		<>
			{products.map((item, index) => (
				<Card
					key={index}
					name={item.name}
					path={item.colors[0].images[0]}
					id={item.id}
					setProduct={setProduct}
				/>
			))}
		</>
	);
};
