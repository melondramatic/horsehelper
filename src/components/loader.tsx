import { CircularProgress, makeStyles } from '@material-ui/core';

const styles = makeStyles({
	loadingContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const Loader = ({ loadingText }: { loadingText: string }) => {
	const classes = styles();

	return (
		<div className={classes.loadingContainer}>
			<h2>{loadingText}</h2>
			<CircularProgress />
		</div>
	);
};

export default Loader;
