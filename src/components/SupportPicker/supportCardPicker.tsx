import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';

import { SupportCard } from '../../constants';
import SupportCardPickerDialog from './supportCardPickerDialog';
import SupportPickerImage from './supportPickerImage';

const styles = makeStyles((theme) => ({
	supportCardPickerContainer: {
		display: 'flex',
		margin: '4px',
		padding: '4px',
		border: '3px transparent solid',
		cursor: 'pointer',
	},
	supportCardPickerPlaceholder: {
		height: '194px',
		width: '194px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#888',
		border: '3px dashed #eee',
		borderRadius: '4px',
		fontSize: '18px',

		'&:hover': {
			backgroundColor: '#696969',
		},
	},
	selected: {
		border: `3px solid ${theme.palette.primary.main}`,
		borderRadius: '8px',
	},
}));

interface Props {
	support: SupportCard | null;
	onClick: Function;
	index: number;
	selectedSupport: number;
}

const SupportCardPicker = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const classes = styles();
	const { support, index, selectedSupport, onClick } = props;

	return (
		<div
			className={classNames(classes.supportCardPickerContainer, {
				[classes.selected]: support && index === selectedSupport,
			})}
		>
			{support === null ? (
				<div
					className={classes.supportCardPickerPlaceholder}
					onClick={() => {
						setIsOpen(true);
					}}
				>
					<div>Select Support Card</div>
					<AddIcon />
				</div>
			) : (
				<SupportPickerImage
					onClick={onClick}
					supportCard={support}
					setIsOpen={setIsOpen}
					index={index}
				/>
			)}
			<SupportCardPickerDialog
				index={index}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				onClose={() => {
					setIsOpen(false);
				}}
			/>
		</div>
	);
};

export default SupportCardPicker;
