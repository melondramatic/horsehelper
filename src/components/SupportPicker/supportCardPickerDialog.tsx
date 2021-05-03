import { SetStateAction, useContext, useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	makeStyles,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import { Types } from '../../constants';
import { SupportPageDataContext } from '../../pages/mainPage';
import { SupportDataContext } from '../../pages/supportPage';
import { buildSupportImages } from '../../utils/buildSupportDialogImages';
import { filterSupportData } from '../../utils/filterSupportData';

import speedImg from '../../images/speed.png';
import stamImg from '../../images/stamina.png';
import powerImg from '../../images/power.png';
import gutsImg from '../../images/guts.png';
import intImg from '../../images/int.png';
import friendImg from '../../images/friend.png';

import SupportCardPickerFilterImage from './supportCardPickerFilterImage';

const styles = makeStyles({
	supportContentContainer: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	filterContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	clearButton: {
		height: '40px',
		width: '40px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '4px',
		backgroundColor: '#aaa',
		borderRadius: '8px',
	},
	filterTextContainer: {
		marginRight: '4px',
	},
});

interface Props {
	index: number;
	isOpen: boolean;
	setIsOpen: React.Dispatch<SetStateAction<boolean>>;
	onClose: Function;
}

const SupportCardPickerDialog = (props: Props) => {
	const supportData = useContext(SupportDataContext);
	const supportPageData = useContext(SupportPageDataContext);
	const [selectedType, setSelectedType] = useState<Types | null>(null);

	const classes = styles();

	const { selectedSupports, setSelectedSupports } = supportPageData;

	return (
		<Dialog
			open={props.isOpen}
			onClose={() => props.onClose()}
			scroll={'paper'}
		>
			<DialogTitle>
				<div>Select Support Card</div>
				<div className={classes.filterContainer}>
					<div className={classes.filterTextContainer}>Filter: </div>
					<SupportCardPickerFilterImage
						selectedType={selectedType}
						filterType={Types.Speed}
						img={speedImg}
						onClick={() => setSelectedType(Types.Speed)}
					/>
					<SupportCardPickerFilterImage
						selectedType={selectedType}
						filterType={Types.Stamina}
						img={stamImg}
						onClick={() => setSelectedType(Types.Stamina)}
					/>
					<SupportCardPickerFilterImage
						selectedType={selectedType}
						filterType={Types.Power}
						img={powerImg}
						onClick={() => setSelectedType(Types.Power)}
					/>
					<SupportCardPickerFilterImage
						selectedType={selectedType}
						filterType={Types.Guts}
						img={gutsImg}
						onClick={() => setSelectedType(Types.Guts)}
					/>
					<SupportCardPickerFilterImage
						selectedType={selectedType}
						filterType={Types.Int}
						img={intImg}
						onClick={() => setSelectedType(Types.Int)}
					/>
					<SupportCardPickerFilterImage
						selectedType={selectedType}
						filterType={Types.Friend}
						img={friendImg}
						onClick={() => setSelectedType(Types.Friend)}
					/>
					<div
						className={classes.clearButton}
						onClick={() => {
							setSelectedType(null);
						}}
					>
						<ClearIcon fontSize={'large'} />
					</div>
				</div>
			</DialogTitle>
			<DialogContent className={classes.supportContentContainer}>
				{buildSupportImages(
					props.index,
					filterSupportData(selectedType, supportData),
					selectedSupports,
					setSelectedSupports,
					props.setIsOpen
				)}
			</DialogContent>
		</Dialog>
	);
};

export default SupportCardPickerDialog;
