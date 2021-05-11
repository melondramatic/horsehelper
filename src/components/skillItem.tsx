import { makeStyles } from '@material-ui/core';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';

import { Skill } from '../constants';

const styles = makeStyles((theme) => ({
	skillContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		border: '1px solid #ddd',
		borderRadius: '4px',
		margin: '4px',
		padding: '4px',
		backgroundColor: theme.palette.secondary.dark,
	},
	skillHeaderContainer: {
		display: 'flex',
		flex: 4,
		alignItems: 'center',
	},
	skillImage: {
		height: '50px',
		width: '50px',
		borderRadius: '4px',
	},
	skillNames: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '4px',
	},
	dialogIconContainer: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	skillTag: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: '0 4px',
	},
	skillDescription: {
		display: 'flex',
		flexWrap: 'wrap',
		flex: 5,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	},
}));

const SkillItem = (props: { skill: Skill }) => {
	const classes = styles();

	const { skill } = props;
	console.log(skill);
	return (
		<div className={classes.skillContainer}>
			<div className={classes.skillHeaderContainer}>
				<img
					className={classes.skillImage}
					src={skill.img}
					alt={`skill.name-img`}
				/>
				<div className={classes.skillNames}>
					<div>{skill.japaneseName}</div>
					<div>{skill.name}</div>
				</div>
			</div>
			<div className={classes.dialogIconContainer}>
				{skill.isDialog && <SmsOutlinedIcon />}
			</div>
			<div className={classes.skillTag}>{skill.tag}</div>
			<div className={classes.skillDescription}>{skill.description}</div>
		</div>
	);
};

export default SkillItem;
