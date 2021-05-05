import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';

import { Skill, SupportCard } from '../constants';
import { SupportPageDataContext } from '../pages/mainPage';
import SkillItem from './skillItem';

const styles = makeStyles((theme) => ({
	supportCardSkillsContainer: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		margin: '0 16px',
	},
	allSkillsContainer: {
		overflow: 'auto',
	},
	innateSkillsContainer: {
		paddingBottom: '4px',
		marginBottom: '8px',
		borderBottom: `4px solid ${theme.palette.secondary.main}`,
	},
}));

const buildSkills = (skills: Skill[]) => {
	const skillsArray = [] as JSX.Element[];
	skills.forEach((skill, index) => {
		const skillItem = <SkillItem key={index} skill={skill} />;
		skillsArray.push(skillItem);
	});

	return skillsArray;
};

const SkillsContainer = () => {
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
		<div className={classes.supportCardSkillsContainer}>
			<h3>Skills</h3>
			<div className={classes.allSkillsContainer}>
				<div className={classes.innateSkillsContainer}>
					{buildSkills(supportData.innateSkills)}
				</div>
				<div>{buildSkills(supportData.skills)}</div>
			</div>
		</div>
	);
};

export default SkillsContainer;
