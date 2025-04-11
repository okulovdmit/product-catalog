import React from 'react';
// import styles from '';
import { Buttons } from '../buttons/buttons';
import { TColor } from '@utils/types';

type TCharacteristicsProps = {
	colors: TColor[];
	onClick: (productId: string, colorId: number) => void;
};

export const Characteristics = ({
	colors,
	onClick,
}: TCharacteristicsProps): React.JSX.Element => {
	return (
		<>
			{/* <Buttons type='size' colors={colors} /> */}
			<Buttons type='color' colors={colors} onClick={onClick} />
		</>
	);
};
