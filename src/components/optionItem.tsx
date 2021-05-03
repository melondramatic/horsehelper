import { makeStyles } from '@material-ui/core';
import { Option } from '../constants';

const styles = makeStyles({
	optionContainer: {
		display: 'flex',
		margin: '8px 0',
		paddingBottom: '8px',
		borderBottom: '1px solid #aaa',
	},
	effect: {
		flex: 1,
	},
	text: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
	},
});

const OptionItem = (props: { option: Option }) => {
	const classes = styles();
	const { option } = props;
	return (
		<div className={classes.optionContainer}>
			<div className={classes.text}>{option.text}</div>
			<div className={classes.effect}>{option.effect}</div>
		</div>
	);
};

export default OptionItem;
