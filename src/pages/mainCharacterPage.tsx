import { makeStyles, MenuItem } from '@material-ui/core';
import React from 'react';
import Dropdown from '../components/dropdown';

const styles = makeStyles({
	mainCharacterPageContainer: {
		display: 'flex',
		width: '100%',
	},
	horseSelectionContainer: {
		flex: 2,
	},
	raceInfoContainer: {
		flex: 3,
	},
	eventDialogContainer: {
		flex: 1,
	},
});

const UmaNames = [
	<MenuItem key={1} value={1}>
		bigwa scarletto
	</MenuItem>,
	<MenuItem key={2} value={2}>
		teio
	</MenuItem>,
	<MenuItem key={3} value={3}>
		teio but fire
	</MenuItem>,
];

interface MainCharacterPageProps {
	selectedHorse: string;
	setSelectedHorse: React.Dispatch<React.SetStateAction<string>>;
}

const MainCharacterPage = (props: MainCharacterPageProps) => {
	const classes = styles();
	const { selectedHorse, setSelectedHorse } = props;

	return (
		<div className={classes.mainCharacterPageContainer}>
			<div className={classes.horseSelectionContainer}>
				<Dropdown
					labelText={'Select an Uma'}
					value={selectedHorse}
					values={UmaNames}
					onChange={setSelectedHorse}
				/>
			</div>
			<div className={classes.raceInfoContainer}>races</div>
			<div className={classes.eventDialogContainer}>events</div>
		</div>
	);
};

export default MainCharacterPage;
