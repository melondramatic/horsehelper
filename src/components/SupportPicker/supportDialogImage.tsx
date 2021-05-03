import { makeStyles } from '@material-ui/core';
import { SupportCard } from '../../constants';

const styles = makeStyles({
	imageContainer: {
		padding: '4px',
	},
	image: {
		height: '100px',
		width: '100px',
	},
});

interface Props {
	index: number;
	onClick: Function;
	supportCard: SupportCard;
}

const SupportDialogImage = (props: Props) => {
	const classes = styles();

	const { index, onClick, supportCard } = props;

	return (
		<div
			key={index}
			onClick={() => onClick()}
			className={classes.imageContainer}
		>
			<img
				className={classes.image}
				src={supportCard.img}
				alt={supportCard.name}
			/>
		</div>
	);
};

export default SupportDialogImage;
