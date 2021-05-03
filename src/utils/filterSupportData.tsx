import { SupportCard, Types } from '../constants';

export const filterSupportData = (
	filter: Types | null,
	supportData: SupportCard[]
) => {
	let filteredData = supportData;
	if (filter) {
		filteredData = supportData.filter((supportCard) => {
			return supportCard.type === filter;
		});
	}
	return filteredData;
};
