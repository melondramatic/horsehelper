import { FormControl, InputLabel, makeStyles, Select } from '@material-ui/core';

interface DropdownProps {
	labelText: string;
	value: string;
	values: JSX.Element[];
	onChange: Function;
}

const styles = makeStyles({
	dropdownContainer: {
		margin: '8px',
		width: '200px',
	},
});

const Dropdown = (props: DropdownProps) => {
	const classes = styles();

	return (
		<FormControl className={classes.dropdownContainer}>
			<InputLabel>{props.labelText}</InputLabel>
			<Select
				value={props.value}
				onChange={(e) => props.onChange(e.target.value)}
			>
				{props.values}
			</Select>
		</FormControl>
	);
};

export default Dropdown;
