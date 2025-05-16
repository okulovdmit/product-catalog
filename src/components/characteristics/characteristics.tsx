import React from 'react';
// import styles from '';
import { ButtonsColor } from '../buttons/buttons-color';
import { ButtonsSizes } from '../buttons/buttons-sizes';
import { TColor, TSize } from '@utils/types';

type TCharacteristicsProps = {
	sizes: TSize[];
	colors: TColor[];
	handleChooseColor: (productId: string, colorId: number) => void;
	handleChooseSize: (sizeId: number) => void;
};

export const Characteristics = ({
	sizes,
	colors,
	handleChooseColor,
	handleChooseSize,
}: TCharacteristicsProps): React.JSX.Element => {
	return (
		<>
			<ButtonsSizes sizes={sizes} handleChooseSize={handleChooseSize} />
			<ButtonsColor colors={colors} handleChooseColor={handleChooseColor} />
		</>
	);
};
