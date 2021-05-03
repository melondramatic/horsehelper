import { makeStyles } from '@material-ui/styles';
import { Dialog, DialogEvent, Option } from '../constants';
import OptionItem from './optionItem';

import type1Img from '../images/event1.png';
import type2Img from '../images/event2.png';
import type3Img from '../images/event3.png';
import type4Img from '../images/event4.png';
import type5Img from '../images/event5.png';

const styles = makeStyles({
	dialogContainer: {
		display: 'flex',
		flexDirection: 'column',
		margin: '8px',
	},
	eventHeader: {
		display: 'flex',
		alignItems: 'flex-start',
		borderBottom: '2px solid #ddd',
		borderLeft: '4px solid #ddd',
		paddingLeft: '4px',
	},
	name: {
		paddingBottom: '4px',
		marginBottom: '4px',
		fontSize: '18px',
		fontWeight: 'bold',
	},
	typeImage: {
		height: '50px',
	},
	optionsContainer: {
		margin: '0 16px',
	},
});

export const buildOptions = (options: Option[]) => {
	const optionsArray = [] as JSX.Element[];
	options.forEach((option) => {
		const optionItem = <OptionItem option={option} />;
		optionsArray.push(optionItem);
	});
	return optionsArray;
};

const buildTypeImg = (type: string) => {
	let img;
	switch (type) {
		case '1':
			img = type1Img;
			break;
		case '2':
			img = type2Img;
			break;
		case '3':
			img = type3Img;
			break;
		case '4':
			img = type4Img;
			break;
		case '5':
			img = type5Img;
			break;

		default:
			break;
	}

	return (
		<img
			style={{ height: '25px', paddingRight: '8px' }}
			src={img}
			alt={`dialog-img-${type}`}
		/>
	);
};

const DialogItem = (props: { dialog: Dialog | DialogEvent }) => {
	const classes = styles();
	const { dialog } = props;

	return (
		<div className={classes.dialogContainer}>
			<div className={classes.eventHeader}>
				{
					//@ts-ignore
					dialog.type && buildTypeImg(dialog.type)
				}
				<div className={classes.name}>{dialog.japaneseName}</div>
			</div>
			<div className={classes.optionsContainer}>
				{buildOptions(dialog.options)}
			</div>
		</div>
	);
};

export default DialogItem;
