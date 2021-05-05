import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';
import { SetStateAction } from 'react';

interface Props {
	isOpen: boolean;
	setIsOpen: React.Dispatch<SetStateAction<boolean>>;
	dialogTitle: string;
	dialogContent: string;
	confirmText: string;
	cancelText: string;
	onClickConfirm: Function;
	onClickCancel: Function;
}

const ConfirmationDialog = (props: Props) => {
	return (
		<Dialog
			open={props.isOpen}
			onClose={() => {
				props.setIsOpen(false);
			}}
		>
			<DialogTitle>{props.dialogTitle}</DialogTitle>
			<DialogContent>
				<DialogContentText>{props.dialogContent}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					color={'primary'}
					variant={'contained'}
					onClick={() => {
						props.onClickConfirm();
						props.setIsOpen(false);
					}}
				>
					{props.confirmText}
				</Button>
				<Button
					color={'primary'}
					variant={'outlined'}
					onClick={() => {
						props.onClickCancel();
						props.setIsOpen(false);
					}}
				>
					{props.cancelText}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ConfirmationDialog;
