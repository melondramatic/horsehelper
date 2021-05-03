import { SetStateAction } from 'react';
import SupportDialogImage from '../components/SupportPicker/supportDialogImage';
import { SelectedSupports, SupportCard } from '../constants';

export const buildSupportImages = (
	supportIndex: number,
	supportData: SupportCard[],
	selectedSupports: SelectedSupports,
	setSelectedSupports: React.Dispatch<React.SetStateAction<SelectedSupports>>,
	setIsOpen: React.Dispatch<SetStateAction<boolean>>
) => {
	const images = supportData.map((supportCard, index) => {
		return (
			<SupportDialogImage
				key={index}
				index={index}
				onClick={() => {
					setSelectedSupports({
						...selectedSupports,
						[`support${supportIndex}`]: supportData[index],
					});
					setIsOpen(false);
				}}
				supportCard={supportCard}
			/>
		);
	});
	return images;
};
