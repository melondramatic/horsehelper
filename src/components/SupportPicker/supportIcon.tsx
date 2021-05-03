import { IconButton } from '@material-ui/core';
import { InfoRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

interface SupportIconProps {
	number: number;
	onClick: Function;
}

const styles = makeStyles({
	supportIconContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const SupportIcon = (props: SupportIconProps) => {
	const classes = styles();

	return (
		<div className={classes.supportIconContainer}>
			<IconButton onClick={() => props.onClick()}>
				<InfoRounded />
			</IconButton>
			<div>{props.number}</div>
		</div>
	);
};

export default SupportIcon;
