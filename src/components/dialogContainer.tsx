import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';

import { Dialog, DialogEvent, SupportCard } from '../constants';
import { SupportPageDataContext } from '../pages/mainPage';
import DialogItem from './dialogItem';

const styles = makeStyles((theme) => ({
	supportCardDialogContainer: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		margin: '0 16px',
	},
	eventsContainer: {
		borderBottom: `4px solid ${theme.palette.secondary.main}`,
		marginBottom: '4px',
		paddingBottom: '4px',
	},
}));

const buildDialogs = (dialogs: Dialog[] | DialogEvent[]) => {
	const dialogArray = [] as JSX.Element[];
	dialogs.forEach((dialog, index) => {
		const dialogItem = <DialogItem key={index} dialog={dialog} />;
		dialogArray.push(dialogItem);
	});

	return dialogArray;
};

const DialogContainer = () => {
	const supportPageData = useContext(SupportPageDataContext);
	const classes = styles();

	const { selectedSupports, selectedSupport } = supportPageData;

	const supportData: SupportCard =
		//@ts-ignore
		selectedSupports[`support${selectedSupport}`];

	if (!supportData) {
		return null;
	}

	return (
		<div className={classes.supportCardDialogContainer}>
			<h3>Dialog</h3>
			<div className={classes.eventsContainer}>
				{buildDialogs(supportData.events)}
			</div>
			<div>{buildDialogs(supportData.dialog)}</div>
		</div>
	);
};

export default DialogContainer;
