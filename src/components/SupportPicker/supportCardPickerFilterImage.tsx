import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import { Types } from '../../constants';

const styles = makeStyles({
	filterImg: {
		height: '40px',
		width: '40px',
		margin: '4px',
		border: '1px solid transparent',
		filter: 'grayscale(100%)',
	},
	selectedFilter: {
		filter: 'none',
	},
});

interface Props {
	selectedType: Types | null;
	filterType: Types;
	img: string;
	onClick: Function;
}

const SupportCardPickerFilterImage = (props: Props) => {
	const classes = styles();
	const { filterType: typeFilter, img, onClick, selectedType } = props;

	return (
		<img
			className={classNames(classes.filterImg, {
				[classes.selectedFilter]: typeFilter === selectedType,
			})}
			onClick={() => {
				onClick();
			}}
			src={img}
			alt={selectedType?.toString()}
		/>
	);
};

export default SupportCardPickerFilterImage;
