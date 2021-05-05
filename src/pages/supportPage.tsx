import React, { useContext, useEffect, useState } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { makeStyles } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { SupportCard } from '../constants';
import Loader from '../components/loader';
import SkillsContainer from '../components/skillsContainer';
import DialogContainer from '../components/dialogContainer';
import { buildSupportCardPickers } from '../utils/buildSupportCardPickers';
import { SupportPageDataContext } from './mainPage';
import ConfirmationDialog from '../components/confirmationDialog';
import { lightBlue } from '@material-ui/core/colors';

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
	clearAllContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '8px',
		cursor: 'pointer',
	},
	clearAllButton: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: lightBlue[200],
		height: '75px',
		width: '75px',
		borderRadius: '8px',

		'&:hover': {
			backgroundColor: lightBlue[300],
		},
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

	const [isOpen, setIsOpen] = useState(false);

	if (!supportData || supportData.length === 0) {
		return <Loader loadingText={'Loading Support Card Data'} />;
	}

	const {
		selectedSupports,
		selectedSupport,
		setSelectedSupport,
		setSelectedSupports,
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
					<div className={classes.clearAllContainer}>
						<div
							className={classes.clearAllButton}
							onClick={() => {
								setIsOpen(true);
							}}
						>
							<div>Clear All</div>
							<DeleteForeverIcon />
						</div>
					</div>
				</div>
			</SupportDataContext.Provider>

			<div className={classes.supportCardDataContainer}>
				<SkillsContainer />
				<DialogContainer />
			</div>
			<ConfirmationDialog
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				dialogTitle={'Clear All Selected Cards?'}
				dialogContent={'Are you sure you want to clear all selected cards?'}
				confirmText={'Clear'}
				cancelText={'Cancel'}
				onClickConfirm={() => {
					setSelectedSupports({
						support0: null,
						support1: null,
						support2: null,
						support3: null,
						support4: null,
						support5: null,
					});
				}}
				onClickCancel={() => {}}
			/>
		</div>
	);
};

export default SupportPage;
