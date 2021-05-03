import { SetStateAction, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import LoopIcon from '@material-ui/icons/Loop';
import ClearIcon from '@material-ui/icons/Clear';

import { SupportCard } from '../../constants';
import { SupportPageDataContext } from '../../pages/mainPage';

const styles = makeStyles({
	imageContainer: {
		position: 'relative',
		height: '200px',
		width: '200px',
	},
	image: {
		height: '200px',
		width: '200px',
		borderRadius: '8px',
	},
	loopIconContainer: {
		position: 'absolute',
		bottom: 5,
		left: 5,
		backgroundColor: '#696969',
		opacity: '0.7',
		height: '45px',
		width: '45px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	deleteIconContainer: {
		position: 'absolute',
		bottom: 5,
		right: 5,
		backgroundColor: '#696969',
		opacity: '0.7',
		height: '45px',
		width: '45px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		color: 'white',
	},
});

interface Props {
	supportCard: SupportCard;
	onClick: Function;
	setIsOpen: React.Dispatch<SetStateAction<boolean>>;
	index: number;
}

const SupportPickerImage = (props: Props) => {
	const supportPageData = useContext(SupportPageDataContext);
	const classes = styles();

	const { selectedSupports, setSelectedSupports } = supportPageData;

	const { supportCard, onClick, setIsOpen, index } = props;

	return (
		<div className={classes.imageContainer}>
			<img
				className={classes.image}
				src={supportCard.img}
				alt={supportCard.name}
				onClick={() => onClick()}
			/>
			<div
				className={classes.loopIconContainer}
				onClick={() => {
					setIsOpen(true);
				}}
			>
				<LoopIcon className={classes.icon} fontSize={'large'} />
			</div>
			<div
				className={classes.deleteIconContainer}
				onClick={() => {
					setSelectedSupports({
						...selectedSupports,
						[`support${index}`]: null,
					});
				}}
			>
				<ClearIcon className={classes.icon} fontSize={'large'} />
			</div>
		</div>
	);
};

export default SupportPickerImage;
