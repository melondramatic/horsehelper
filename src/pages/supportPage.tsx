import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

import { SupportCard } from '../constants';
import Loader from '../components/loader';
import SkillsContainer from '../components/skillsContainer';
import DialogContainer from '../components/dialogContainer';
import { buildSupportCardPickers } from '../utils/buildSupportCardPickers';
import { SupportPageDataContext } from './mainPage';

const styles = makeStyles({
	supportPageContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	supportPickersContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
	supportCardDataContainer: {
		display: 'flex',
		margin: '0 32px',
	},
	supportCardDialogContainer: {
		display: 'flex',
		flex: 1,
	},
});

export const SupportDataContext = React.createContext([] as SupportCard[]);

const SupportPage = () => {
	const classes = styles();

	const supportPageData = useContext(SupportPageDataContext);
	const firestore = useFirestore();
	const supportsCollection = firestore.collection('supports');
	const { data: supports } = useFirestoreCollectionData<SupportCard>(
		supportsCollection
	);
	const [supportData, setSupportData] = useState<SupportCard[]>([]);

	useEffect(() => {
		setSupportData(supports);
	}, [supports]);

	if (!supportData || supportData.length === 0) {
		return <Loader loadingText={'Loading Support Card Data'} />;
	}

	const {
		selectedSupports,
		selectedSupport,
		setSelectedSupport,
	} = supportPageData;

	return (
		<div className={classes.supportPageContainer}>
			<SupportDataContext.Provider value={supportData}>
				<div className={classes.supportPickersContainer}>
					{buildSupportCardPickers(
						selectedSupports,
						setSelectedSupport,
						selectedSupport
					)}
				</div>
			</SupportDataContext.Provider>
			<div className={classes.supportCardDataContainer}>
				<SkillsContainer />
				<DialogContainer />
			</div>
		</div>
	);
};

export default SupportPage;
