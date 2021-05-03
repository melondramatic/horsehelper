import React, { SetStateAction } from 'react';
import SupportCardPicker from '../components/SupportPicker/supportCardPicker';
import { SelectedSupports } from '../constants';

export const buildSupportCardPickers = (
	selectedSupports: SelectedSupports,
	setSelectedSupport: React.Dispatch<SetStateAction<number>>,
	selectedSupport: number
) => {
	const supportCardPickers = [];
	for (let i = 0; i < 6; i++) {
		supportCardPickers.push(
			<SupportCardPicker
				key={i}
				index={i}
				// @ts-ignore
				support={selectedSupports[`support${i}`]}
				onClick={() => setSelectedSupport(i)}
				selectedSupport={selectedSupport}
			/>
		);
	}

	return supportCardPickers;
};
